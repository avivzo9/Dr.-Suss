export default {
    template: `
    <section>
        <form @submit.prevent="addBook">
            <input v-if="!isClicked" type="text" placeholder="Write note" @click="open" >
            <input v-if="isClicked" v-model="note.header" type="text" placeholder="header" >
            <button v-if="isClicked">📌</button>
            <textarea v-if="isClicked" v-model="note.text" cols="30" rows="15" placeholder="write note"></textarea>
            <input v-if="isClicked" type="color" v-model="note.color">
            <button v-if="isClicked">save</button>
            <button v-if="isClicked">cancel</button>
        </form>
    </section>
    `,
    data() {
        return {
            isClicked: false,
            note: {
                header: '',
                text: '',
                color: ''
            }
        }
    },
    methods: {
        open() {
            this.isClicked = true;
        },
        addBook() {
            console.log(this.note);
        }
    },
}