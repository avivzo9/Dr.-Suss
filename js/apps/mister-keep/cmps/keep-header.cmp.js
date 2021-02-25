import noteFilterCmp from "./note-filter.cmp.js"

export default {
    template: `
    <section class="keep-header-container container">
        <div class="keep-header sub-container">
            <h1>Keep</h1>
            <note-filter-cmp />
            <ul class="pinned-notes">
                <li>Pinned notes</li>
                <li>Unpinned notes</li>
            </ul>
            <!-- <button class="app-picker">☰</button> -->
        </div>
    </section>
    `,
    components: {
        noteFilterCmp
    }
}