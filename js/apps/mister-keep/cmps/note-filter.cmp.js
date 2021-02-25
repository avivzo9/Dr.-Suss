import { eventBus } from "../services/keep-event-bus.service.js"

export default {
    template: `
            <input type="search" placeholder="Search" @input="setSearch" name="search-input" v-model="searchNote">
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