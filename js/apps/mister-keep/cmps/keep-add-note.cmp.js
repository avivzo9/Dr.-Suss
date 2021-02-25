import { eventBus } from "../services/keep-event-bus.service.js";
import { keepService } from "../services/keep.service.js";
import keepAddListCmp from "./keep-add-list.cmp.js";

export default {
    template: `
    <section class="add-note-container container">
        <div class="add-note sub-container">
            <form @submit.prevent="addNote" v-if="!isList">
                <div class="add-types flex">
                    <input class="text-box-header" v-if="!isClicked" type="text" placeholder="Write note" @click="open" >
                    <button @click="changeToList">List</button>
                </div>
                <div class="header-pin flex">
                    <input class="text-box" v-if="isClicked" v-model="note.header" type="text" placeholder="header" >
                    <button v-if="isClicked">📌</button>
                </div>
                <textarea class="text-box-area" v-if="isClicked" v-model="note.text" cols="70" rows="2" placeholder="write note"></textarea>
                <div class="note-edit flex">
                    <input v-if="isClicked" type="color" v-model="note.color">
                    <label v-if="isClicked" class="custom-file-upload">
                    <input v-if="isClicked" @change="imgLoad" name="img-upload" type="file"/>Upload Image</label>
                    <button v-if="isClicked">save</button>
                    <button v-if="isClicked" @click="close">cancel</button>
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
            if (!this.note.header) return
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