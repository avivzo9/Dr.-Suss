import { eventBus } from '../services/keep-event-bus.service.js';
import { keepService } from '../services/keep.service.js';
import keepImg from './keep-types/keep-img-type.cmp.js'
import keepList from './keep-types/keep-list-type.cmp.js';
import keepText from './keep-types/keep-text-type.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-grid sub-container">
        <div v-for="note in notes" :key="note.id" class="card flex" :style="{'background-color': note.color }">
            <h3 class="note-header">{{note.header}}</h3>
            <component :is="currentTypeComponent(note)" :note="note" ></component>
            <div>
                <input v-if="note.isEdit" type="text" placeholder="Header Update">
                <input v-if="note.isEdit" type="text" placeholder="Text Update">
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            newNote: '',
        }
    },
    methods: {
        currentTypeComponent(note) {
            return note.type;
        },
        editNoteOpen(id) {
            keepService.updateEditNote(id)
                .then(() => {
                    eventBus.$emit('note-update')
                })
        },
        newNoteUpdate() {
            console.log('this.note:', this.note)
            var newNote = JSON.parse(JSON.stringify(this.note))
            console.log('newNote:', newNote)

        }
    },
    components: {
        keepText,
        keepImg,
        keepList
    },
    created() {
        eventBus.$on('note-edit', this.editNoteOpen)
        setTimeout(() => { console.log(this.newNote) }, 500)
        this.newNoteUpdate()
    },
    destroyed() {
        eventBus.$off('note-edit', this.editNoteOpen)
    }
}