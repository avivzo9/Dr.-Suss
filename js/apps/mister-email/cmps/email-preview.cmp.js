// import { storageService } from "../../../services/async-storage-service.js";


import { eventBus } from '../services/email-event-bus.service.js';
import { emailsService } from '../services/email.service.js'
export default {

    props: ['emails'],
    template: `
    <section>
        <ul class="email-list">
            <li class="email-specific-email" @click="isclicked(email)" v-for="email in emails">
                <h4 v-if="!email.isOpen" :class="readUnread">{{email.to}}</h4>
                <h2 v-if="!email.isOpen">{{email.subject}}</h2>
                <h3 v-if="!email.isOpen">{{getTime(email.sentAt)}}</h3>
                <div  class="email-specific-email-body" v-if="email.isOpen">{{email.body}}</div>
                <button class="email-specific-email-body" v-if="email.isOpen" @click.prevent.stop="deleteEmail(email)">garbage</button>
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
            // this.currEmail = email;
            if (email.isOpen === true) email.isOpen = false
            else email.isOpen = true
        },
        deleteEmail(email) {
            emailsService.removeEmail(email.id)
                .then(() => {
                    eventBus.$emit('update-emails')

                })
        },

    },
    computed: {
        readUnread() {
            // return {read: email. ,unread:   }
        },
    }
}