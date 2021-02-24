import keepAddNoteCmp from "../cmps/keep-add-note.cmp.js";
import keepHeaderCmp from "../cmps/keep-header.cmp.js"
import keepList from '../cmps/keep-list.cmp.js'
import { eventBus } from "../services/keep-event-bus.service.js";
import { keepService } from '../services/keep.service.js'

export default {
    template: `
    <section>
        <keep-header-cmp />
        <keep-add-note-cmp @note-update="loadNotes" />
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
    },
    created() {
        this.loadNotes()
        eventBus.$on('note-update', this.loadNotes)
    },
    destroyed() {
        eventBus.$off('note-update', this.loadNotes)
    },
    components: {
        keepAddNoteCmp,
        keepHeaderCmp,
        keepNotes: keepList,
        keepService
    }
}