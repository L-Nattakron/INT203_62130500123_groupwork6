const constraints = {
        name: {
            presence: true,
        },
        username: {
            presence: true,
        },
        password: {
            presence: true,
            format: {
                pattern: `(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}`,
                message: "must contain a uppercase, lowercase, number, and at least 8 or more characters"
            }    
        },
        email: {
            presence: true,
            email: true
        },
        phone: {
            presence: true,
            length: {
                minimum : 10,
                message: "must be at least 10 digits"
            }       
        },
        faculty: {
            presence: true
        },
        university: {
            presence: true
        }
    }
    
    const app =Vue.createApp({
        data() {
            return {
                profilepic: './images/profile.jpg',
                url : 'https://www.instagram.com/_sss.silk_/',
              formdata:{ 
                name: null,
                username: null,
                password: null,
                email: null,
                phone: null,
                faculty: null,
                university: null,
              },
                faculty_lists: [{faculty_id: 1, faculty_name:'Information Technology'},
                                {faculty_id: 2, faculty_name: 'Engineering'},
                                {faculty_id: 3, faculty_name: 'Science'},
                                {faculty_id: 4, faculty_name: 'Architecture and Design'}],

                university_lists: [{university_id: 1, university_name:'KMUTT'},
                                {university_id: 2, university_name: 'KMITL'},
                                {university_id: 3, university_name: 'KMUTNB'}],
                errors: null,
            }
        },
        methods: {
            checkForm(){
                this.errors = validate(this.formdata,
                                        constraints)
                console.log(this.errors)
                if(!this.errors){
                    alert("Your profile is update successfully");
                }
            }
        }
    })  
    
app.component('display-error',{
    props:{
        errors: {
            type: Object,
            required: true,
        },
        field: {
            type: String,
            required: true,
        }
    },
    template: 
    /*html*/
    `
    <div v-if="errors && errorList">
        <p v-for="error in errorList" class="text-red-500">{{error}}</p>
    </div>
    `,
    computed: {
        errorList(){
            return this.errors[this.field]
        }
    }
})

app.mount('#app')