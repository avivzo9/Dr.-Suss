import { eventBus } from '../services/email-event-bus.service.js';
import { emailsService } from '../services/email.service.js'
import emailPreview from './email-preview.cmp.js'
import {storageService} from '../../../services/async-storage-service.js' 
export default {
    template: `
    <email-preview :emails="emails"/>
    `,
    data() {
        return {
            emails: []
        }
    },
    methods: {
        fetchEmails() {

            // emailsService.getEmails()
            emailsService.query()
                .then((emails) => {
                    console.log('emails:', emails)
                    // this.emails=JSON.parse(JSON.stringify(emails))
                    this.emails = emails
                    console.log('this.emails:', this.emails)                
                })

                .catch((err) => {
                    console.log('err:', err)
                })
        },
        
    },

    computed: {
    },

    created() {
        this.fetchEmails()
        eventBus.$on('update-emails',this.fetchEmails)
    },
    destroyed() {
        eventBus.$off('update-emails',this.fetchEmails)
    },
    components: {
        emailsService,
        storageService,
        emailPreview
    },
};