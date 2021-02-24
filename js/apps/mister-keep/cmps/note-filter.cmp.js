import { eventBus } from "../services/keep-event-bus.service.js"

export default {
    template: `
    <section class="notes-container">
            <form @input.prevent="setSearch">
                <input type="search" placeholder="Search" v-model="searchNote">
            </form>
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