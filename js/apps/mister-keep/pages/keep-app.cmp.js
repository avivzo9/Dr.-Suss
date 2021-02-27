import keepAddNoteCmp from "../cmps/keep-add-note.cmp.js";
import keepHeaderCmp from "../cmps/keep-header.cmp.js"
import keepList from '../cmps/keep-list.cmp.js'
import { eventBus } from "../services/keep-event-bus.service.js";
import { keepService } from '../services/keep.service.js'

export default {
    template: `
    <section class="keep-app-main">
        <div class="keep-app-second">
            <keep-header-cmp />
            <div v-if="msg" class="user-msg-all">{{NoteMsgToShow}}</div>
            <keep-add-note-cmp @note-update="loadNotes" />
            <keep-list :notes="notesToShow" />
        </div>
    </section>
    `,
    data() {
        return {
            notes: [],
            search: null,
            msg: ''
        }
    },
    methods: {
        loadNotes() {
            keepService.query()
                .then(notes => {
                    this.notes = notes;
                })
        },
        setSearch(searchNote) {
            this.search = searchNote
        },
        alertNoteMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 3000);
        },
    },
    computed: {
        NoteMsgToShow() {
            return this.msg.txt
        },
        notesToShow() {
            if (!this.search) return this.notes;
            const searchStr = this.search.toLowerCase()
            const notesToShow = this.notes.filter(note => {
                return note.header.toLowerCase().includes(searchStr)
            })
            return notesToShow;
        }
    },
    created() {
        this.loadNotes()
        eventBus.$on('note-update', this.loadNotes)
        eventBus.$on('note-add-msg', this.alertNoteMsg)
        eventBus.$on('searched', this.setSearch)
    },
    destroyed() {
        eventBus.$off('note-update', this.loadNotes)
        eventBus.$off('searched', this.setSearch)
        eventBus.$off('note-add-msg', this.alertNoteMsg)
    },
    components: {
        keepAddNoteCmp,
        keepHeaderCmp,
        keepList,
        keepService
    }
}