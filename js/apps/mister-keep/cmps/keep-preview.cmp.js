import keepImg from './keep-types/keep-img-type.cmp.js'
import keepText from './keep-types/keep-text-type.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-grid sub-container">
        <div v-for="note in notes" :key="note.id" class="card flex" :style="{'background-color': note.color }">
            <h3 class="note-header">{{note.header}}</h3>
            <component :is="currentTypeComponent(note)" :note="note" ></component>
        </div>
    </section>
    `,
    methods: {
        currentTypeComponent(note) {
            return note.type;
        },
    },
    components: {
        keepText,
        keepImg
    },
    created() {
        setTimeout(() => {
            console.log(this.notes);

        }, 100);
    }
}