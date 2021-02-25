import addEmail from '../cmps/email-add.cmp.js'
import inboxEmails from '../cmps/email-inbox.cmp.js'
import starredEmails from './email-stared.cmp.js'

export default {
    template: `
    <section > 
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