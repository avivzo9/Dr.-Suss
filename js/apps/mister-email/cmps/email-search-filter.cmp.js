import { eventBus } from '../services/email-event-bus.service.js';

export default {
  template: `
  <section>
      <input @input="searching()" type="search" placeHolder="search email" v-model="search">
      <input type="radio" name="read" value="read" v-model="radio" @click="picked">
      <label for="male">read</label>
      <input type="radio" name="unread" value="unread" v-model="radio" @click="picked">
      <label for="female">unread</label>
  </section> 
    `,
  data() {
    return {
      search: '',
      radio: '',
      readUnread:''
    }
  },
  methods: {
    searching() {
      eventBus.$emit('searched-email', this.search)
    },
    picked(ev) {
      this.readUnread=ev.toElement.name
      if(this.readUnread==='read') eventBus.$emit('read-email', this.readUnread)
      else if(this.readUnread==='unread') eventBus.$emit('unread-email', this.readUnread)
      

    },
  },
  computed: {

  },
  components: {

  },
}
