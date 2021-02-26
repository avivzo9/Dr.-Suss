// import { storageService } from "../../../services/async-storage-service.js";


import { eventBus } from '../services/email-event-bus.service.js';
import { emailsService } from '../services/email.service.js'
export default {

    props: ['emails'],
    template: `
    <section>
        <ul class="email-list">
            <li :class="readClosedEmail(email)"  class="email-specific-email" @click="isclicked(email)" v-for="email in emails">
                <div class="email-specific-email-top">
                    <h2 class="align-self"> {{email.to}}  <span>  ----{{email.subject}}</span></h2>
                    <!-- <h4 class="align-self">{{email.to}}</h4> -->
                    <h3 class="align-self">{{getTime(email.sentAt)}}</h3>
                    <button class="email-garbage-can"  v-if="email.isOpen" @click.prevent.stop="deleteEmail(email)">🗑</button>
                </div>
                <div class="email-specific-email-body" v-if="email.isOpen">   
                    <div  v-if="email.isOpen">{{email.body}}</div>
                </div>
            </li>
        </ul>
    </section>
    
    `,
    data() {
        return {
            currEmail: {},
        }
    },
    methods: {
        getTime(timestemp) {
            var time = new Date(timestemp).toISOString().slice(0, 19).replace('T', ' ');
            return time
        },
        isclicked(email) {
            if (email.isOpen === true) {
                email.isRead = true;
                email.isOpen = false
            }
            else {
                email.isRead = true;
                email.isOpen = true
            }
        },
        deleteEmail(email) {
            emailsService.removeEmail(email.id)
                .then(() => {
                    eventBus.$emit('update-emails')

                })
        },
        readClosedEmail(email) {
            return { readAndOpen: (email.isRead === true && email.isOpen === true)
                , readAndClose: (email.isRead === true && email.isOpen === false)
                , unreadAndOpen: (email.isRead === false && email.isOpen === true)
            ,unreadAndClose: (email.isRead === false && email.isOpen === false)}
        },

    },
    computed: {
     

    }
}