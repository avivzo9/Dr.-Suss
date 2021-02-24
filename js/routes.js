import homePage from "./pages/home-page.cmp.js"
import emailApp from "./apps/mister-email/pages/email-app.cmp.js"
import keepApp from "./apps/mister-keep/pages/keep-app.cmp.js"
import bookApp from './apps/miss-book/main.js'

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/miss-book',
        component: bookApp
    },
    // Book details
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp
    },
    // {
    //     path: '/email/:folder/:emailId',
    //     component: emailDetails
    // },
]


export const myRouter = new VueRouter({ routes })