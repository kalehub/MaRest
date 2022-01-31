<template>
    <div class="columns is-multiline is-1-mobile is-0-tablet is-2-desktop mt-5 mb-3 ml-5 mr-5">
        <div class="column is-offset-3 is-one-quarter mt-6">
            <h1 style="color:#E76F51;" class="is-size-4">Gratis Bikin Akun</h1>
            <p style="color:#E76F51;">Buat akun untuk mendapatkan promo menarik</p>
            <p class="mt-2"></p>
            <button @click='toSignUp' class="button is-primary mb-5 mt-5">Daftar Sekarang</button>
        </div>
        <div class="columns ml-4 mr-3"> 
        <form @submit.prevent='submitForm'>
             <h1 style="color:#E76F51;" class="is-size-4"> <center>Masuk/Daftar</center> </h1>
            <div class="field">
                <label style="color:#E76F51;" for="">Nama Pengguna</label>
                <div class="control">
                    <input type="text" class="input" v-model="username">
                </div>
            </div>
            <div class="field">
                <label style="color:#E76F51;" for="">Password</label>
                <div class="control">
                    <input type="password" class="input" v-model="password">
                </div>
            </div>
            <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error}}</p>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button is-fullwidth is-primary">Masuk</button>
                </div>
            </div>
        </form></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            username: '',
            password: '',
            errors: [],
        }
    },
    mounted(){
        document.title = 'Login | Mammamia'
    },
    methods:{
        async submitForm(){
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.removeItem('token')
            const formData = {
                username : this.username,
                password : this.password
            }
            await axios
                .post('/api/v1/token/login/', formData)
                .then(response =>{
                    const token = response.data.auth_token
                    this.$store.commit('setToken', token)
                    axios.defaults.headers.common['Authorization'] = 'Token '+token
                    localStorage.setItem('token', token)
                    const toPath = this.$route.query.to || '/'
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response){
                        for (const property in error.response.data){
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    }else{
                        this.errors.push('Something went wrong, please try again')
                        console.log(JSON.stringify(error))
                    }
                })
        },
        toSignUp(){
            this.$router.push({name:'Signup'})
        }

    }
    
}
</script>
