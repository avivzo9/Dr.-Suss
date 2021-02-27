export default {
    template: `
   <header class="app-header sub-container">
       <div class="book-logo">
           <h1>Books</h1>
       </div>
       <nav>
           <router-link active-class="active-link" to="/book-home" exact>Home</router-link> |
           <router-link to="/book">Books</router-link> |
           <!-- <router-link to="/about">About</router-link> -->
       </nav>
    </header>
    `,

}