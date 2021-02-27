import homePage from "./pages/home-page.cmp.js"
import emailApp from "./apps/mister-email/pages/email-app.cmp.js"
import keepApp from "./apps/mister-keep/pages/keep-app.cmp.js"
import bookApp from './apps/miss-book/pages/book-app.cmp.js';


const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp
    },
]


export const myRouter = new VueRouter({ routes })