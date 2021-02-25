import keepActionsCmp from "../keep-actions.cmp.js"


export default {
    props: ['note'],
    template: `
            <ul class="notes-text-container">
                <li :style="{'background-color': note.color }" >
                    {{note.header}} : {{note.text}}
                    <keep-actions-cmp :note="note" />
                </li>
            </ul>
    `,
    components: {
        keepActionsCmp
    },

}