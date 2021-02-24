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