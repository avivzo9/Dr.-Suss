import navEmailHeader from '../cmps/email-Header.cmp.js'
import navEmailSide from '../cmps/email-side-bar.cmp.js'
import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `
    <section class="email-page container">
        <div class="sub-conteiner">   
            <nav-email-header/> 
            <div class="container">
                <div class="mail-horizon-container sub-container">
                <nav-email-side class="email-side-bar flex"/>  
                <email-list class="email-list-container"/>
            </div>
            </div>
        </div>
    </section>
    `,
    components: {
        navEmailHeader,
        navEmailSide,
        emailList,
    },
}