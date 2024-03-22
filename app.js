const app = Vue.createApp({
    data() {
        return {
            title: 'Mr',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/11.jpg',
            location: 'location'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results)

            this.title = results[0].name.title,
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large,
            this.location = results[0].location.city
        },
    },
})

app.mount('#app')