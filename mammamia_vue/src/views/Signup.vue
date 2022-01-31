<template>
    <div class="columns is-mobile">
        <div class="column is-4 is-offset-4">
            <h1 style="color:#E76F51;" class="is-size-4"><center>Daftar</center></h1>
            <form @submit.prevent='submitForm'>
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
                <div class="field">
                    <label style="color:#E76F51;" for="">Re-enter Password</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password2">
                    </div>
                </div>
                <div class="notification is-danger" v-if="errors.length">
                    <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    
                </div>
                <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                        <button class="button is-primary">Daftar</button>
                    </p>
                    <p class="control">
                        <button @click='toHome' class="button is-primary">Home</button>
                    </p>
                </div>
                <hr>
                Sudah punya akun? <router-link to='/log-in'>Login</router-link> 
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import {toast} from 'bulma-toast'
export default {
    name: 'Signup',
    data(){
        return{
            username: '',
            password: '',
            password2: '',
            errors: [],

        }
    },
    methods:{
        submitForm(){
            // reset error
            this.errors = []

            // validate
            if(this.username === ''){
                this.errors.push('The username is missing!')
            }
            if(this.password === ''){
                this.errors.push('The password is missing!')
            }
            if(this.password != this.password2){
                this.errors.push('The passwords does not match')
            }
            // if no errors
            if(!this.errors.length){
                const formData = {
                    username : this.username,
                    password : this.password

                }
                axios
                    .post('/api/v1/users/', formData)
                    .then(response=>{
                        toast({
                            message: 'Your account is successfully created, please log in!',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'bottom-right',
                        })
                        this.$router.push('/log-in')
                    })
                    .catch(error => {
                        if (error.response){
                            for (const property in error.response.data){
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        }else if(error.message){
                            this.errors.push('Something went wrong, please try again')
                            console.log(JSON.stringify(error))
                        }
                    })
            }
            
        },
        toHome(){
            this.$router.push({name:'Home'})
        }
    },
    
    
}
</script>
