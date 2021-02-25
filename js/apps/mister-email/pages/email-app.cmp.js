import navEmailHeader from '../cmps/email-Header.cmp.js'
import navEmailSide from '../cmps/email-side-bar.cmp.js'
import emailsContainer from '../cmps/email-list.cmp.js'


export default {
    template: `
    <section class="email-page container">
        <nav-email-header/> 
        <div class="email-horizontal-container">
            <nav-email-side/>  
            <emails-container/>
        </div>
    </section>
    `,
    components: {
        navEmailHeader,
        navEmailSide,
        emailsContainer,
    },
}