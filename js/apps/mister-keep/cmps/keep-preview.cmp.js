import textType from './keep-types/keep-text.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section>
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