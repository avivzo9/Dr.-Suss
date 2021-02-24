import keepAddNoteCmp from "../cmps/keep-add-note.cmp.js";
import keepHeaderCmp from "../cmps/keep-header.cmp.js"
import keepNotes from '../cmps/keep-add-note.cmp.js'
import { keepService } from '../services/keep.service.js'

export default {
    template: `
    <section>
        <keep-header-cmp />
        <keep-add-note-cmp />
        <keep-nots :notes="notes" />
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
        }
    },
    created() {
        this.loadNotes()
    },
    components: {
        keepAddNoteCmp,
        keepHeaderCmp,
        keepNots: keepNotes,
        keepService
    }
}