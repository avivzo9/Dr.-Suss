import { emailsService } from '../services/email.service.js'
export default {
    template: `
    <ul class="email-list">
        <li  v-for="email in emails">
            <h2>{{email.subject}}</h2>
            <h3>{{email.body}}</h3>
            <!-- <h4>{{}}</h4> -->
            <h3>{{getTime(email.sentAt)}}</h3>
        </li>
    </ul>
    `,
    data() {
        return {
            emails: []

        }
    },
    methods: {
        fetchEmails() {
            emailsService.getEmails()
                .then((emails) => {
                    this.emails = emails
                })
                .catch((err) => {
                    console.log('err:', err)
                })
        },
        getTime(timestemp) {
           var time= new Date(timestemp).toISOString().slice(0, 19).replace('T', ' ');
            return time
        }
    },

    computed: {
    },
    created() {
        this.fetchEmails()
        setTimeout(() => {
            console.log(this.emails);
        }, 1000)
    },
    components: {
        emailsService
    },
};