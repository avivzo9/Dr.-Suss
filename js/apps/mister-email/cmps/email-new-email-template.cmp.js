
import {eventBus} from "../services/email-event-bus.service.js"
import { utillService } from "../../../services/util.service.js";
import { emailsService } from "../services/email.service.js";


export default {
    template: `
        <section>   
        <form  @submit.prevent="clicked">
            <input type="email" placeholder="to"  v-model="email.to" />
            <input type="text" placeholder="subject"  v-model="email.subject" />
            <input type="text" placeholder="body" v-model="email.body"/>
            <button @click="save">send</button>
        </form>
        </section>
    `,
    data() {
      return {
       isClick:false,
       email:{
            to:'',
            subject:'',
            body:'',
            isRead:false,
            sentAt: Date.now(),
            isOpen:false,
            id:utillService.makeId(),
       }
      }
    },
    methods: {
        clicked(){
           console.log('gf');
        },
        save(){
            emailsService.addEmail(this.email)
            .then(()=>{
                eventBus.$emit('update-emails')
            })
        }
      
    },
  
    computed: {
    },
    created() {
  
    },
    components: {
        emailsService
    },
  };