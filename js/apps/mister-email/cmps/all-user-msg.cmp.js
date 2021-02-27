import { eventBus } from "../services/email-event-bus.service.js"

export default {
    template: `
        <div v-if="msg" :class="msg.type">
            <p>{{showMsg}}</p>
        </div>
    `,
    data() {
        return {
            msg: null
        }
    },
    methods: {
        setEmailMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 3000);
        }
    },
    computed: {
        showMsg() {
            console.log('asdasdas');
            return this.msg.txt
        }
    },
    created() {
        eventBus.$on('show-msg-email', this.setEmailMsg);
        eventBus.$on('show-msg', () => {})
    },
    destroyed() {
        eventBus.$on('show-msg-email', this.setEmailMsg);
        eventBus.$off('show-msg', this.setMsg)
    }
}