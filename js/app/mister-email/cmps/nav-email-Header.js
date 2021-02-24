import searchFilters from '../cmps/search-filters.js'
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
