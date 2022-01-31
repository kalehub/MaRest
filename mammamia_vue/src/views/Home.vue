<template>
  <div class="hero">
    <div class="hero is-fullheight is-dark has-background">
      <img alt="burger background" class="hero-background is-transparent" src="@/assets/images/bghome.jpeg" />
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            MAMMAMIA RENON 
          </h1>
          <h3 class="subtitle">
            pick up or delivery
          </h3>
        </div>
      </div>
    </div>
  <div class="container mt-5 mb-5">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest Product</h2>
      </div>
    <ProductBox
      v-for="product in latestProducts"
      v-bind:key="product.id"
      v-bind:product="product" />
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'
import asyncDataLogin_ready from '@/mixins/asyncDataLogin'

export default {
  name: 'Home',
  data(){
    return{
      latestProducts: []
    }
  },
  components: {
    ProductBox,
  },
  mounted(){
    this.getLatestProducts()
    document.title = 'Home'+ ' | mammamia'
  },
  methods: {
    async getLatestProducts(){
        this.$store.commit('setIsLoading', true)
        await axios.get('/api/v1/latest-products/').then(response => {this.latestProducts = response.data}).catch(error => {console.log(error)})
        this.$store.commit('setIsLoading', false)
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/css/bulma.css';

.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.3;
}
</style>



