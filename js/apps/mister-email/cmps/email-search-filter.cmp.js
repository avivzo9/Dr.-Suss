import { eventBus } from '../services/email-event-bus.service.js';

export default {
  template: `
  <section>
      <input @input="searching()" type="search" placeHolder="search email" v-model="search">
      <input type="radio" id="read" name="read" value="read" v-model="radio" @click="picked">
      <label for="read">read</label>
      <input type="radio" id="unread" name="unread" value="unread" v-model="radio" @click="picked">
      <label for="unread">unread</label>
      <input type="radio" id="all" name="all" value="all" v-model="radio" @click="picked">
      <label for="all">all</label>
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
      else if(this.readUnread==='all') eventBus.$emit('all-email', this.readUnread)
      

    },
  },
  computed: {

  },
  components: {

  },
}
