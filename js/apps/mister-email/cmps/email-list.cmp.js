import { eventBus } from '../services/email-event-bus.service.js';
import { storageService } from '../../../services/async-storage-service.js'
import { emailsService } from '../services/email.service.js'
import emailPreview from './email-preview.cmp.js'

export default {
    template: `
    <email-preview :emails="emailsToShow"/>
    `,
    data() {
        return {
            emails: [],
            search: null,
        }
    },
    methods: {
        fetchEmails() {
            emailsService.query()
                .then((emails) => {
                    this.emails = emails
                })

                .catch((err) => {
                    console.log('err:', err)
                })
        },
        setSearch(searchEmail) {
            this.search = searchEmail;
            console.log('email-list-L29');
        }
    },
    computed: {
        emailsToShow() {
            console.log('enter');
            if (!this.search) return this.emails;
            const searchStr = this.search.toLowerCase()
            const emailsToShow = this.emails.filter(email => {
                return email.body.toLowerCase().includes(searchStr)
            })
            return emailsToShow;
        }
    },

    created() {
        this.fetchEmails()
        eventBus.$on('update-emails', this.fetchEmails)
        eventBus.$on('searched-email', this.setSearch)
    },
    destroyed() {
        eventBus.$off('update-emails', this.fetchEmails)
        eventBus.$off('searched-email', this.setSearch)
    },
    components: {
        emailsService,
        storageService,
        emailPreview
    },
};