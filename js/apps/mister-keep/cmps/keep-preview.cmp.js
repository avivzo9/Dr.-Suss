import textType from './keep-types/keep-text.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-container">
            <text-type v-if="type === 'text'" :notes="notes" />
    </section>
    `,
    data() {
        return {
            type: 'text'
        }
    },
    methods: {},
    components: {
        textType
    },
}