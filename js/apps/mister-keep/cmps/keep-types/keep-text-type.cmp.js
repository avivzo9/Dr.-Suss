import keepActionsCmp from "../keep-actions.cmp.js"

export default {
    props: ['note'],
    template: `
            <div class="text-card flex">
                <p>{{note.text}}</p>
                <keep-actions-cmp :note="note" />
            </div>
    `,
    components: {
        keepActionsCmp
    },
}