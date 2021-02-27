export default {
    template: `
        <section class="book-filter">
            <form @submit.prevent="setFilter">
                <input class="book-search-input" type="text"  v-model="filterBy.byTitle" placeholder="Search By Name"/>
                <input class="book-search-input" type="number"  v-model.number="filterBy.byPrice" placeholder="what's your limit?" />
                <button class="filter-btn">Check</button>
            </form>
        </section>
    `,
    data() {
        return {
            filterBy: { byTitle: '', byPrice: '' },
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        },
    },
    computed: {},
    components: {},
    created() {},
};