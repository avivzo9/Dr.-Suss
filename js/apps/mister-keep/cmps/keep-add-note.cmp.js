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
                    <button @click="changeToList">☑️</button>
                </div>
                <div class="header-pin flex" v-if="isClicked">
                    <input class="text-box-header" v-model="note.header" type="text" placeholder="header" >
                </div>
                <textarea class="text-box-area" v-if="isClicked" v-model="note.text" placeholder="write note"></textarea>
                <div class="note-edit-container flex" v-if="isClicked">
                    <div class="note-edit flex">
                        <label class="custom-file-upload">
                        <input @change="imgLoad" name="img-upload" type="file"/>Upload Image</label>
                    </div>
                    <div class="note-save-cancel flex">
                        <button @click="close">cancel</button>
                        <button>save</button>
                    </div>
                </div>
            </form>
            <div v-if="isList">
                    <div class="keep-add-list-container">
                        <input class="add-list-header" required v-model="list.header" type="text" placeholder="header">
                        <keep-add-list-cmp @check-line="switchCheck" @add-list-line="addlistLine" v-for="num in listCount" v-if="isList" @send-list-add="changeToList" />
                        <div class="save-cancel-list flex">
                        <button @click="closeList">Cancel</button>
                        <button @click="addList">Save</button>
                    </div>
                </div>
            </div>
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
            isList: false,
            listCount: 1,
            list: {
                id: '',
                header: '',
                todos: [],
                type: 'keepList',
            },
            date: null,
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
            if (!this.note.header && !this.note.text && !this.note.src) {
                var msg = {
                    txt: 'Cant save empty note!',
                    type: 'success',
                }
                eventBus.$emit('note-add-msg', msg)
                return
            }
            if (this.note.color === '') this.note.color === 'white'
            this.$emit('color-changed', this.note.color)
            keepService.addNote(this.note)
                .then(() => {
                    var msg = {
                        txt: 'Note saved succesfully',
                        type: 'success',
                    }
                    eventBus.$emit('note-add-msg', msg)
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
                    var msg = {
                        txt: 'Note deleted',
                        type: 'success',
                    }
                    eventBus.$emit('note-add-msg', msg)
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
                this.addNote()
            };
        },
        setImg(imgSrc) {
            this.note.src = imgSrc
            this.note.type = 'keepImg'
        },
        changeToList() {
            this.isList = true;
        },
        addlistLine(todo) {
            this.updateListDate()
            this.list.todos.push({ id: todo.id, text: todo.text, doneAt: this.date, isDone: false })
            console.log('before delete - this.list.todos:', this.list.todos)
            this.listCount += 1;
        },
        addList() {
            this.isList = false,
                keepService.addNote(this.list)
                .then(() => {
                    var msg = {
                        txt: 'List saved succesfully',
                        type: 'success',
                    }
                    eventBus.$emit('note-add-msg', msg)
                    eventBus.$emit('note-update')
                })
        },
        updateListDate() {
            const currentdate = new Date()
            this.date = currentdate.getDay() + '/' + currentdate.getMonth() + '/' + currentdate.getFullYear() + ' , ' + currentdate.getHours() + ':' + currentdate.getMinutes()
        },
        switchCheck(todo) {
            if (!todo.isDone) todo.isDone = true
            else todo.isDone = false
            keepService.switchLineCheck()
                .then(() => {
                    eventBus.$emit('note-update')
                })
        },
        closeList() {
            this.isList = false
        }
    },
    created() {
        eventBus.$on('note-delete', this.sendDeleteNote)
        eventBus.$on('check-line', this.switchCheck)
    },
    destroyed() {
        eventBus.$off('note-delete', this.sendDeleteNote)
        eventBus.$off('check-line', this.switchCheck)
    },
    components: {
        keepAddListCmp
    }
}