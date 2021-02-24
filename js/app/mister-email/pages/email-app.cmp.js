import navEmailHeader from '../cmps/nav-email-Header.js'
import navEmailSide from '../cmps/nav-email-side.js'
import emailsContainer from '../cmps/emails-container.js'


export default {
    template: `
    <section>
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