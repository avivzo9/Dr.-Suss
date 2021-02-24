import homePage from "./pages/home-page.cmp.js"
import emailPage from "./app/mister-email/pages/email-app.cmp.js"
import keepPage from "./app/mister-keep/pages/keep-app.cmp.js"
import missBooks from './app/miss-book/main.js'

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/miss-book',
        component: missBooks
    },
    // Book details
    {
        path: '/keep',
        component: keepPage
    },
    {
        path: '/email/:folder',
        component: emailPage
    },
    // {
    //     path: '/email/:folder/:emailId',
    //     component: emailDetails
    // },
]


export const myRouter = new VueRouter({ routes })