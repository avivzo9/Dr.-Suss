import { eventBus } from "../../services/keep-event-bus.service.js";
import keepActionsCmp from "../keep-actions.cmp.js"

export default {
    props: ['note'],
    template: `
            <div class="text-card flex">
                <p>{{note.text}}</p>
                <ul>
                    <li v-for="todo in note.todos" :key="todo.id" :class="doneClass(todo.isDone)" @click="sendCheck(todo)">
                       - {{todo.text}}
                    </li>
                </ul>
                <keep-actions-cmp :note="note" />
            </div>
    `,
    methods: {
        sendCheck(todo) {
            eventBus.$emit('check-line', todo)
        },
        doneClass(isDone) {
            return (isDone) ? 'note-done' : 'note-undone';
        }
    },
    components: {
        keepActionsCmp
    },
    created() {
        setTimeout(() => {
            console.log(this.note);

        }, 100);
    }
}