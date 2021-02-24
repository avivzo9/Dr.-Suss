import keepAddNoteCmp from "../cmps/keep-add-note.cmp.js";
import keepHeaderCmp from "../cmps/keep-header.cmp.js"
import keepList from '../cmps/keep-list.cmp.js'
import { eventBus } from "../services/keep-event-bus.service.js";
import { keepService } from '../services/keep.service.js'

export default {
    template: `
    <section>
        <keep-header-cmp />
        <keep-add-note-cmp @note-added="updateNotes" />
        <keep-notes :notes="notes" />
    </section>
    `,
    data() {
        return {
            notes: []
        }
    },
    methods: {
        loadNotes() {
            keepService.query()
                .then(notes => {
                    this.notes = notes;
                })
        },
        updateNotes(notes) {
            this.notes = notes
        },
    },
    created() {
        this.loadNotes()
    },
    components: {
        keepAddNoteCmp,
        keepHeaderCmp,
        keepNotes: keepList,
        keepService
    }
}