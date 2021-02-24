import addEmail from '../cmps/add-email.js'
import inboxEmails from '../cmps/inbox-emails.js'
import starredEmails from './email-stared.cmp.js'
export default {
    template: `
    <section> 
        <!-- <h1>nav-email-side connected</h1> -->
    <add-email/> 
    <inbox-emails/>
    <starred-emails/>
    </section>`,

    components: {
        addEmail,
        inboxEmails,
        starredEmails
    },
};