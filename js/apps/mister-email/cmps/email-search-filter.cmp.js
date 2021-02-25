import { eventBus } from "../../mister-keep/services/keep-event-bus.service.js"

export default {
  template: `
  <section>
  <form @input.prevent="searching">
      <input type="search" placeHolder="search email" v-model="search">
  </form>
           <!-- <button>all</button> -->
  </section> 
    `,
  data() {
    return {
      search: '',
    }
  },
  methods: {
    searching() {
      eventBus.$emit('searched-email', this.search)
    },
  },
  computed: {

  },
  components: {

  },
}
