import keepActionsCmp from "../keep-actions.cmp.js"

export default {
    props: ['note'],
    template: `
            <div class="img-type flex">
                <p v-if="note.text">{{note.text}}</p>
                <img class="keep-img" :src="note.src" alt="" />
                <keep-actions-cmp :note="note" />
            </div>
    `,
    components: {
        keepActionsCmp
    },
}