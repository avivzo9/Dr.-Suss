import { eventBus } from "../services/keep-event-bus.service.js";
import { keepService } from "../services/keep.service.js";
import keepAddListCmp from "./keep-add-list.cmp.js";

export default {
    template: `
    <section class="add-note-container container">
        <div class="add-note sub-container">
            <form @submit.prevent="addNote" v-if="!isList">
                <div class="add-types flex" v-if="!isClicked">
                    <input class="text-box" type="text" placeholder="Write note" @click="open" >
                    <button @click="changeToList">List</button>
                </div>
                <div class="header-pin flex" v-if="isClicked">
                    <input required class="text-box-header" v-model="note.header" type="text" placeholder="header" >
                    <button class="pin-note-btn">📌</button>
                </div>
                <textarea class="text-box-area" v-if="isClicked" v-model="note.text" placeholder="write note"></textarea>
                <div class="note-edit-container flex" v-if="isClicked">
                    <div class="note-edit flex">
                        <input type="color" v-model="note.color">
                        <label class="custom-file-upload">
                        <input @change="imgLoad" name="img-upload" type="file"/>Upload Image</label>
                    </div>
                    <div class="note-save-cancel flex">
                        <button @click="close">cancel</button>
                        <button>save</button>
                    </div>
                </div>
            </form>
            <keep-add-list-cmp v-if="isList" @send-list-add="changeToList" />
        </div>
    </section>
    `,
    data() {
        return {
            isClicked: false,
            note: {
                header: '',
                text: '',
                color: '',
                src: '',
                isPinned: false,
                type: ''
            },
            isList: false
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
            this.note.type = 'keepText'
            if (this.note.color === '') this.note.color === 'white'
            this.$emit('color-changed', this.note.color)
            keepService.addNote(this.note)
                .then(() => {
                    this.$emit('note-update')
                    this.close()
                    this.note = {
                        header: '',
                        text: '',
                        color: '',
                        isPinned: false
                    }
                })
        },
        sendDeleteNote(id) {
            keepService.deleteNote(id)
                .then(() => {
                    this.$emit('note-update')
                })
        },
        imgLoad(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.note.src = e.target.result;
                this.note.type = "keepImg"
            };
        },
        setImg(imgSrc) {
            this.note.src = imgSrc
            this.note.type = 'img'
        },
        changeToList() {
            console.log('List!');
            this.isList = true;
        }
    },
    created() {
        eventBus.$on('note-delete', this.sendDeleteNote)
    },
    destroyed() {
        eventBus.$off('note-delete', this.sendDeleteNote)
    },
    components: {
        keepAddListCmp
    }
}