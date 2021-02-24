import { eventBus } from '../services/event-bus-service.js'




export default {
    template: `
    <section class="about app-main">
        <h1 ref="header">About page</h1>
        <nav>
            <router-link to="/about/team">About our Team</router-link> |
            <router-link to="/about/services">About our Services</router-link>
        </nav>
        <router-view />
        <button @click="callBus">Call the bus!</button>
    </section>
    `,
    methods: {
        callBus() {
            console.log('emitting puk!');
            eventBus.$emit('puk', 'abc');
            eventBus.$emit('puk2');
        },
    },
};
