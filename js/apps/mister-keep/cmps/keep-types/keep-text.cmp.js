import { eventBus } from "../../services/keep-event-bus.service.js";
import { keepService } from "../../services/keep.service.js";

export default {
    props: ['notes'],
    template: `
    <section class="notes-container">
            <ul>
                <li v-for="note in notes" :key="note.id" :style="setColor" >
                    {{note.header}} : {{note.text}} {{updateCurrNote(note)}}
                    <input type="color" @blur="changeColor(note.id, $event)">
                    <button @click="sendDelete(note.id)">X</button>
                </li>
            </ul>
    </section>
    `,
    data() {
        return {
            color: '',
            currNote: ''
        }
    },
    methods: {
        sendDelete(id) {
            eventBus.$emit('note-delete', id)
        },
        updateCurrNote(note) {
            this.currNote = note;
        },
        changeColor(id, ev) {
            const color = ev.target.value
            keepService.colorChange(id, color)
            eventBus.$emit('note-update')
        }
    },
    computed: {
        setColor() {
            // console.log('this.currNote:', this.currNote)
            return `background-color: ${this.currNote.color};`;
        }
    },
    created() {
        setTimeout(() => {
            console.log(this.notes);
        }, 300)
    },
}