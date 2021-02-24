import { storageService } from "../../../services/async-storage-service.js";
import { eventBus } from "../services/keep-event-bus.service.js";
import { keepService } from "../services/keep.service.js";

export default {
    template: `
    <section class="container">
        <div class="sub-container">
            <form @submit.prevent="addNote">
                <input v-if="!isClicked" type="text" placeholder="Write note" @click="open" >
                <input v-if="isClicked" v-model="note.header" type="text" placeholder="header" >
                <button v-if="isClicked">📌</button>
                <textarea v-if="isClicked" v-model="note.text" cols="30" rows="15" placeholder="write note"></textarea>
                <input v-if="isClicked" type="color" v-model="note.color">
                <button v-if="isClicked">save</button>
                <button v-if="isClicked" @click="close">cancel</button>
            </form>
        </div>
    </section>
    `,
    data() {
        return {
            isClicked: false,
            note: {
                header: '',
                text: '',
                color: ''
            }
        }
    },
    methods: {
        open() {
            this.isClicked = true;
        },
        close() {
            this.isClicked = false;
        },
        addNote() {
            if (this.note.color === '') this.note.color === 'white'
            keepService.addNote(this.note)
                .then(notes => {
                    this.$emit('note-added', notes)
                    this.close()
                    this.note = {
                        header: '',
                        text: '',
                        color: ''
                    }
                })
        },
        sendDeleteNote(id) {
            keepService.deleteNote(id)
                .then()
        }
    },
    created() {
        eventBus.$on('note-delete', this.sendDeleteNote)
    },
    destroyed() {
        eventBus.$off('note-delete', this.sendDeleteNote)
    },
    components: {
        keepService,
        storageService
    }
}