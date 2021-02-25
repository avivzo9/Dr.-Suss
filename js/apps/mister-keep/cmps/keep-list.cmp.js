import notePreview from './keep-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-container container">
        <note-preview :notes="notes" />
    </section>
    `,
    components: {
        notePreview
    },
}