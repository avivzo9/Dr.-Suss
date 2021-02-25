import searchFilters from './email-search-filter.cmp.js'
export default {
    template: `
    <section class="sub-container">   
        <header class="app-header flex ">
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