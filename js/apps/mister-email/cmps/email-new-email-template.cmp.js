
import { emailsService } from "../services/email.service.js";
import {eventBus} from "../services/email-event-bus.service.js"

export default {
    template: `
        <section>   
        <form  @submit.prevent="clicked">
            <input type="email" placeholder="to"  v-model="email.to" />
            <input type="text" placeholder="subject"  v-model="email.subject" />
            <input type="text" placeholder="body" v-model="email.body"/>
            <button @click="save">send</button>
            <button @click="clicked">garbage</button>
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
            sentAt: Date.now()
       }
      }
    },
    methods: {
        clicked(){
           console.log('gf');
        },
        save(){
            console.log(this.email);
            emailsService.save(this.email)
            eventBus.$emit('update-emails')
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