import { eventBus } from "../../services/keep-event-bus.service.js";

export default {
    props: ['notes'],
    template: `
    <section class="notes-container">
            <ul>
                <li v-for="note in notes" :key>
                    {{note.header}} : {{note.text}}
                    <button @click="sendDelete(note.id)">X</button>
                </li>
            </ul>
    </section>
    `,
    methods: {
        sendDelete(id) {
            eventBus.$emit('note-delete', id)
        }
    },
    created() {
        setTimeout(() => {
            console.log(this.notes);
        }, 300)
    },

}