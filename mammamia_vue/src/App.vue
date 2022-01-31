<template>
    <div class="app">
    <AppNavBarFree/>
        <nav class="navbar">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item"><strong>MAMMA MIA</strong></router-link>
                    <!-- Hamburger Menu -->
                    <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <form method="get" action="/search">
                                <div class="field has-addons">
                                    <div class="control">
                                        <input type="text" class="input" placeholder="Search something" name="query">
                                    </div>
                                    <div class="control"><button class="button is-sucess"><span class="icon"><i class="fas fa-search"></i></span></button></div> 
                                </div>
                            </form>
                        </div>
                    </div>
                    <div v-if="$store.state.isAuthenticated === true" class="navbar-end">
                        <router-link to="/about" class="navbar-item">Kontak</router-link>
                        <router-link to="#" class="navbar-item">Akun</router-link>
                        <div class="navbar-item">
                            <div class="buttons">
                                <router-link to="/about" class="navbar-item">Kontak</router-link>
                                <router-link to="#" class="navbar-item">Akun</router-link>
                                <router-link to="/cart" class="button is-primary">
                                    <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                                    <span>Cart ({{ cartTotalLength }})</span>
                                </router-link>
                                <button @click='logout()' class="button is-danger">Log out</button>
                            </div>
                        </div>
                    </div>
                    <div v-if="$store.state.isAuthenticated === false" class="navbar-end">
                        <router-link to="/about" class="navbar-item">Kontak</router-link>
                        <div class="navbar-item">
                            <div class="buttons">
                                <router-link to="/log-in" class="button is-primary">Log In</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        <AppNavBarMenu/>
        <!-- Loading Bar -->
        <div class="is-loading-bar has-text-centered" v-bind:class="{'is-loading': $store.state.isLoading}">
            <div class="lds-dual-ring">
            </div>
        </div>
        <div class="wrapper">
            <router-view />
        </div>
    <AppFooter/>
  </div>
</template>

<script>
import axios from 'axios'
import AppNavBarFree from '@/components/AppNavBarFree'
import AppNavBarMenu from '@/components/AppNavBarMenu'
import AppFooter from '@/components/AppFooter'

export default {
    components: {
      AppNavBarFree,
      AppNavBarMenu,
      AppFooter
    },
    data() {
        return{
            showMobileMenu: false,
            // simpan cart untuk dibawa ke state
            cart: {
                items: [],
            },
        }
    },
    mounted(){
        this.cart = this.$store.state.cart
    },
    beforeCreate(){
        this.$store.commit('initializeStore')
        const token = this.$store.state.token

        if(token){ // if the user is autheticated
            axios.defaults.headers.common['Authorization'] = 'Token '+token
        } else{ // if the user is not authenticated
            axios.defaults.headers.common['Authorization'] = ''
        }
    },
    computed:{
        cartTotalLength(){
            let totalLength = 0
            for(let i = 0; i < this.cart.items.length; i++){
                totalLength += this.cart.items[i].quantity
            }
            return totalLength
        }
    },
    methods:{
        logout(){
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            localStorage.removeItem('userid')
            this.$store.commit('removeToken')
            this.$router.push({name:'Home'})
        }
    },
}
</script>

<style lang="scss">
@import '~bulma/css/bulma.css';


/* loading bar styling */
.lds-dual-ring{
    display:inline-block;
    width: 80px;
    height: 80px;
}

.lds-dual-ring:after{
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring{
    0%{
        transform: rotate(0 deg);
    }
    100%{
        transform: rotate(360 deg);
    }
}

.is-loading-bar{
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    &.is-loading{
        height: 80px;
    }
}

/* end of loading bar styling */
</style>
