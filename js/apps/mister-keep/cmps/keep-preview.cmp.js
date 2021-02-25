import keepImgTypeCmp from './keep-types/keep-img-type.cmp.js'
import keepTextCmp from './keep-types/keep-text-type.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section>
            <div v-for="note in notes" :key="note.id">
                <keep-text-cmp v-if="note.type === 'text'" :note="note"  />
                <keep-img-type-cmp v-if="note.type === 'img'" :note="note" />
            </div>
    </section>
    `,
    components: {
        keepTextCmp,
        keepImgTypeCmp
    },
    created() {
        setTimeout(() => {
            // console.log(this.notes);

        }, 100);
    }
}