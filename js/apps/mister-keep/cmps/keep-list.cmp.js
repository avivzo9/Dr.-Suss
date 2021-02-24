export default {
    props: ['notes'],
    template: `
    <section class="notes-container">
        <div class="notes-grid">
            <ul>
                <li v-for="note in notes" :key>
                    {{note.header}} {{note.text}}
                </li>
            </ul>
        </div>
    </section>
    `,
    created() {
        console.log(this.notes);
    }
}