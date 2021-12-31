<template>
<section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Fullheight title
      </h1>
      <h2 class="subtitle">
        Fullheight subtitle
      </h2>
    </div>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
  name: 'Home',
  data(){
      return{
          
      }
  },
}
</script>

<style lang="scss">
@import '~bulma/css/bulma.css';

.img{
position: absolute;
width: 1440px;
height: 674px;
left: 0px;
top: 246px;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url();
}

</style>

