import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';

const aboutTeam = {
    template: `
        <section>
            <h2>Our Team is Amazing!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro odit minima vitae aspernatur, dolore explicabo eius ut ducimus numquam laborum repudiandae assumenda suscipit non perferendis obcaecati inventore vel est!</p>
        </section>
    `
}
const aboutServices = {
    template: `
        <section>
            <h2>Our Services are Awesome</h2>
            <p>Services are Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro odit minima vitae aspernatur, dolore explicabo eius ut ducimus numquam laborum repudiandae assumenda suscipit non perferendis obcaecati inventore vel est!</p>
            <h4>We are everywhere</h4>
            <input type="text" ref="loc" placeholder="Your location" />
        </section>
    `,
    mounted() {
        const el = this.$refs.loc;
        el.focus();
        el.scrollIntoView();
    }
}

const routes = [{
        path: '/miss-books',
        component: homePage,
    },
    {
        path: '/book',
        component: bookApp,
    },
    {
        path: '/book-home',
        component: homePage,
    },
    {
        path: '/book/:bookId',
        component: bookDetails,
    },
];

export const myRouter = new VueRouter({ routes });