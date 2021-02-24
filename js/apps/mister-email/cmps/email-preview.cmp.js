export default{
    props:['emails'],
    template:`
    <section>
    <ul class="email-list">
        <li  v-for="email in emails">
            <h4>{{email.to}}</h4>
            <h2>{{email.subject}}</h2>
            <h3>{{email.body}}</h3>
            <h3>{{getTime(email.sentAt)}}</h3>
        </li>
        <pre>{{emails}}</pre>
    </ul>
    </section>
    
    `,
    methods: {
        getTime(timestemp) {
            var time = new Date(timestemp).toISOString().slice(0, 19).replace('T', ' ');
            return time
        }
    }
}