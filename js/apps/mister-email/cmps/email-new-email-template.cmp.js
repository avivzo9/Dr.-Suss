
import { eventBus } from "../../miss-book/services/event-bus-service.js"

import { utillService } from "../../../services/util.service.js";
import { emailsService } from "../services/email.service.js";


export default {
    template: `
        <section class="new-mail-modal-contaier" >   
        <form class="new-mail-modal" @submit.prevent.stop="happens">
            <div class="new-mail-modal-header">   
                <button @click="closeModal">X</button>
                new massage
            </div>
            <input type="email" placeholder="to"  v-model="email.to" required />
            <input type="text" placeholder="subject"  v-model="email.subject" />
            <textarea type="text"  placeholder="body" v-model="email.body" ></textarea>
            <button @click="save">send</button>
        </form>
        </section>
    `,
    data() {
        return {
            closePressed: false,
            email: {
                to: '',
                subject: '',
                body: '',
                isRead: false,
                sentAt: Date.now(),
                isOpen: false,
                id: utillService.makeId(),
            }
        }
    },
    methods: {
        happens() {
            
        },
        save() {
            if(this.email.to.includes('@')){
                emailsService.addEmail(this.email)
                .then(() => {
                    const msg = {
                        txt: 'Email saved succesfully',
                        type: 'success',
                    };
                    eventBus.$emit('show-msg-all', msg);
                    eventBus.$emit('update-emails')
                }).catch(err => {
                    console.log(err);
                    const msg = {
                        txt: err.message,
                        type: 'error'
                    }
                    console.log('msg:', msg)

                    eventBus.$emit('show-msg-all', msg)
                })
                this.$emit('close-modal', this.closePressed)
            }else console.log('errrrrrror');
            
            
        },
        closeModal() {
            this.email.to = ''
            this.email.subject = ''
            this.email.body = ''
            this.closePressed = true;
            this.$emit('close-modal', this.closePressed)
        },
    },

    computed: {
    },
    created() {

    },
    components: {
        emailsService
    },
};