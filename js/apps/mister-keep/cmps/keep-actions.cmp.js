import { eventBus } from "../services/keep-event-bus.service.js"
import { keepService } from "../services/keep.service.js"

export default {
    props: ['note'],
    template: `
        <div class="action-panel flex">
            <input type="color" @blur="changeColor(note.id, $event)">
            <button @click="sendDelete(note.id)">X</button>
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
        }
    },
}