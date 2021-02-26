import { utillService } from "../../../services/util.service.js"

export default {
    template: `
        <div class="flex">
            <input type="checkbox" >
            <input v-model="todo.text" ref="listText" @keyup.enter="sendAddListLine" type="text" placeholder="What todo?">
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
    },
    mounted() {
        const elListText = this.$refs.listText;
        elListText.focus()
    }
}