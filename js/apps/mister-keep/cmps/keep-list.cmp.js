import notePreview from './keep-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section>
        <note-preview :notes="notes" />
    </section>
    `,
    components: {
        notePreview
    },
}