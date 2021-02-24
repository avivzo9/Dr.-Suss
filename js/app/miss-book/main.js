import { myRouter } from './routes.js';
import userMsg from './cmps/user-msg.cmp.js'
import appHeader from './cmps/header.cmp.js';
import homePage from '../miss-book/pages/home-page.cmp.js';

export default {
    router: myRouter,
    template: `
    <section> 
        <user-msg/>
        <app-header></app-header>
        <router-view/>
    </section>`,

    components: {
        appHeader,
        userMsg,
        homePage
    },
};