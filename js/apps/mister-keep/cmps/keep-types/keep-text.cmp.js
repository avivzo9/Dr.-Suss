import { eventBus } from "../../services/keep-event-bus.service.js";
import { keepService } from "../../services/keep.service.js";

export default {
    props: ['notes'],
    template: `
            <ul class="notes-text-container">
                <li v-for="note in notes" :key="note.id" :style="setColor" class="text-card" >
                    {{note.header}} : {{note.text}}
                    <div class="edit-card">
                        <input type="color" @blur="changeColor(note.id, $event)">
                        <button @click="sendDelete(note.id)">X</button>
                    </div>    
                </li>
            </ul>
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
                .then(note => {
                    this.updateCurrNote(note)
                    console.log(this.currNote);
                    this.currNote.color = color
                })
            eventBus.$emit('note-update')
        }
    },
    computed: {
        setColor() {
            console.log('this.currNote:', this.currNote)
            return `background-color: ${this.currNote.color};`;
        }
    },
    created() {
        setTimeout(() => {
            console.log(this.notes);
        }, 300)
    },
}