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
            readUnread: ''
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
        },
        setReadUnread(readUnread) {
            this.readUnread = readUnread;
        }
    },
    computed: {
        emailsToShow() {
            if (this.readUnread === 'read') var readUnreadStr = true
            else if (this.readUnread === 'unread') readUnreadStr = false
            if (!this.search && !this.readUnread) return this.emails;//אין סינון כלל
            if (!this.search) {//יש רק רדיוס
                const emailsToShow = this.emails.filter(email => {
                    return (email.isRead === readUnreadStr)
                })
                return emailsToShow;
            }
            const searchStr = this.search.toLowerCase()
            if (!this.readUnread) {//רק תיבת חיפוש
                const emailsToShow = this.emails.filter(email => {
                    return email.body.toLowerCase().includes(searchStr)
                })
                return emailsToShow;
            }
            const emailsToShow = this.emails.filter(email => {//גם רדיוס וגם תיבת חיפוש
                return email.body.toLowerCase().includes(searchStr)&&(email.isRead === readUnreadStr)     
            })
            return emailsToShow;
        }
    },

    created() {
        this.fetchEmails()
        eventBus.$on('update-emails', this.fetchEmails)
        eventBus.$on('searched-email', this.setSearch)
        eventBus.$on('read-email', this.setReadUnread)
        eventBus.$on('unread-email', this.setReadUnread)
    },
    destroyed() {
        eventBus.$off('update-emails', this.fetchEmails)
        eventBus.$off('searched-email', this.setSearch)
        eventBus.$off('read-email', this.setReadUnread)
        eventBus.$off('unread-email', this.setReadUnread)
    },
    components: {
        emailsService,
        storageService,
        emailPreview
    },
};