
// import { eventBus } from "../apps/mister-email/services/email-event-bus.service.js"
import { eventBus } from "../apps/miss-book/services/event-bus-service.js"
export default {
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    methods: {
        alertMsg(msg) {
            console.log('user');
            this.msg = msg
            console.log('this.msg:', this.msg)
            setTimeout(() => {
                this.msg = null
            }, 3000);
        }
    },
    computed: {
        alertMsg(msg) {
            console.log('user');
            this.msg = msg
            console.log('this.msg:', this.msg)
            setTimeout(() => {
                this.msg = null
            }, 3000);
        }
    },
    created() {
        eventBus.$on('show-msg-all', this.alertMsg)
    },
    destroyed() {
        eventBus.$off('show-msg-all', this.alertMsg)
    }
}