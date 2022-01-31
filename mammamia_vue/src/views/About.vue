<template>
  <div class="hero">
    <div class="hero is-fullheight is-light has-background">
      <img alt="burger background" class="section--left is-transparent" src="@/assets/images/bghome.jpeg" />
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title">
            MAMMAMIA RENON 
          </h1>
          <h3 class="subtitle">
            pick up or delivery
          </h3>
        </div>
        <div class="container">
          <h1 class="title">
            MAMMAMIA RENON 
          </h1>
          <h3 class="subtitle">
            pick up or delivery
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
  name: 'About',
  data(){
      return{
          
      }
  },
}
</script>

<style lang="scss">
@import '~bulma/css/bulma.css';

.section--left {
    overflow: hidden;
    position: absolute;
    z-index: 2;
    width: calc(58.4vw - 22px);
    height: calc(100vh - 1px);
}
.section--left.is-transparent {
  opacity: 0.3;
}
</style>

