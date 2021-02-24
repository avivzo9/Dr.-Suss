import newEmailModal from './email-new-email-template.cmp.js'
export default {
  template: `
  <section>
           <button @click="addNewEmail">add new email</button>
           <new-email-modal v-if="isClicked"/>
  </section> 
  `,
  data() {
    return {
      // emails: []
      isClicked:false
    }
  },
  methods: {
    addNewEmail(){
      this.isClicked=true;
      console.log('this.isClicked:', this.isClicked)
    }
  },

  computed: {
  },
  created() {

  },
  components: {
    newEmailModal
  },
};