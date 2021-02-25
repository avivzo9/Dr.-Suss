import searchFilters from './email-search-filter.cmp.js'
export default {
    template: `
    <section class="container">   
        <header class="app-header sub-container flex ">
            <div class="logo">
               <h1>emails</h1>
            </div>
            <search-filters/>
            <button>options</button>
        </header>
    </section>
    `,
    components: {
        searchFilters,
    },

}