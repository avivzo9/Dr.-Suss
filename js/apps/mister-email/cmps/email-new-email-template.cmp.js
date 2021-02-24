export default {
    template: `
        <section>   
        <form  @submit.prevent="clicked">
            <input type="email" placeholder="to" @input="inEmail" v-model="email.to" required/>
            <input type="text" placeholder="subtitle" @input="inSubtitle" v-model="email.subtitle" />
            <input type="text" placeholder="subject" @input="inSubject" v-model="email.subject"/>
            <button @click="clicked">send</button>
            <button @click="clicked">garbage</button>
        </form>
        </section>
    `,
    data() {
      return {
       isClick:false,
       email:{
            to:'',
            subtitle:'',
            subject:'',
       }
      }
    },
    methods: {
        clicked(){
           console.log('gf');
        },
        inEmail(a){
            console.log(this.email.to);
        },
        inSubtitle(a){
            console.log(this.email.subtitle);
        },
        inSubject(a){
            console.log(this.email.subject);
        }
      
    },
  
    computed: {
    },
    created() {
  
    },
    components: {
    },
  };