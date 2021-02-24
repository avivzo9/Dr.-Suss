import searchFilters from './email-search-filter.cmp.js'
export default {
    template: `
   <header class="app-header">
        <div class="logo">
           <h1>emails</h1>
        </div>
        <search-filters/>
        <button>options</button>
    </header>
    `,
    components: {
        searchFilters,
    },

}