import { eventBus } from "../services/keep-event-bus.service.js"
import { keepService } from "../services/keep.service.js"

export default {
    props: ['note'],
    template: `
        <div class="action-panel flex">
            <label class="keep-color-action">
            <input type="color" name="keep-color-action" @blur="changeColor(note.id, $event)" />🎨</label>
            <button @click="sendDelete(note.id)" class="edit-btn">🗑</button>
            <button @click="sendEditNote(note)" class="edit-btn">🖊</button>
        </div>
    `,
    methods: {
        sendDelete(id) {
            eventBus.$emit('note-delete', id)
        },
        changeColor(id, ev) {
            const color = ev.target.value
            keepService.colorChange(id, color)
                .then(() => {
                    eventBus.$emit('note-update')
                })
        },
        sendEditNote(note) {
            eventBus.$emit('note-edit', note.id)
        }
    },
}