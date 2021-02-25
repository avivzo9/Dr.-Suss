import keepActionsCmp from "../keep-actions.cmp.js"

export default {
    props: ['note'],
    template: `
            <ul class="notes-text-container">
                <li :style="{'background-color': note.color }" >
                    <img class="keep-img" :src="note.src" alt="" />
                    <keep-actions-cmp :note="note" />
                </li>
            </ul>
    `,
    components: {
        keepActionsCmp
    },
    created() {
        setTimeout(() => {
            console.log(this.note)
        }, 100)
    }
}