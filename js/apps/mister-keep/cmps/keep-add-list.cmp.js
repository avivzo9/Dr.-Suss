import { utillService } from "../../../services/util.service.js"

export default {
    template: `
        <div class="flex">
            <input type="checkbox" >
            <input v-model="todo.text" ref="listText" @keyup.enter="sendAddListLine" type="text" placeholder="What todo?">
            <button @click.prevent="sendDeleteLine(todo.id)">X</button>
        </div>
    `,
    data() {
        return {
            todo: {
                text: '',
                id: utillService.makeId()
            }
        }
    },
    methods: {
        sendAddListLine() {
            this.$emit('add-list-line', this.todo)
        },
        sendDeleteLine(id) {
            console.log('delete-list Emit');
            this.$emit('delete-list-line', id)
        }
    },
    mounted() {
        const elListText = this.$refs.listText;
        elListText.focus()
    }
}