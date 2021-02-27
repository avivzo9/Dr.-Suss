import newEmailModal from './email-new-email-template.cmp.js'
export default {
    template: `
  <section>
           <button class="addNewEmailButton" @click="addNewEmail">Compose Email</button>
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
            this.isClicked = false;
        },
    },

    computed: {},
    created() {


    },
    components: {
        newEmailModal
    },
};