export default {
    template: `
        <section class="app-header-container container">
            <div class="app-header-sub-container sub-container">
                <router-link class="app-header-home router-link" to="/">Dr. Seuss</router-link>
                <nav class="nav-content flex">
                    <router-link class="router-link" to="/email">Email app</router-link>
                    <router-link class="router-link" to="/keep">Miss Keep</router-link>
                    <router-link class="router-link" to="/book">Miss Book</router-link>
                    <router-link class="router-link" to="/about">About</router-link>
                </nav>
            </div>
        </section>
    `,
}