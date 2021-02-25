import { eventBus } from "../services/keep-event-bus.service.js"

export default {
    template: `
    <section class="notes-container">
            <input type="search" placeholder="Search" @input="setSearch" v-model="searchNote">
    </section>
    `,
    data() {
        return {
            searchNote: ''
        }
    },
    methods: {
        setSearch() {
            eventBus.$emit('searched', this.searchNote)
        }
    },
}