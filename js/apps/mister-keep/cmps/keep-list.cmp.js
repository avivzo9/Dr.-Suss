import notePreview from './keep-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-container">
        <note-preview :notes="notes" />
    </section>
    `,
    components: {
        notePreview
    },
    created() {
        console.log(this.notes);
    }
}