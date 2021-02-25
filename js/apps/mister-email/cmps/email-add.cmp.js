import newEmailModal from './email-new-email-template.cmp.js'
export default {
  template: `
  <section>
           <button @click="addNewEmail">add new email</button>
           <new-email-modal @close-modal="modalClose" v-if="isClicked"/>
  </section> 
  `,
  data() {
    return {
      isClicked: false
    }
  },
  methods: {
    addNewEmail() {
      this.isClicked = true;
    },
    modalClose() {
      this.isClicked=false;
    },
  },

  computed: {
  },
  created() {


  },
  components: {
    newEmailModal
  },
};