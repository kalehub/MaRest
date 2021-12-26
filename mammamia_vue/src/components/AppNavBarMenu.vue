<template>
    <nav class="navbar-menu">
        <div class="container is-fluid mt-5">
            <element class="columns columns.is-multiline columns.is-mobile columns.is-desktop has-text-centered">
                <element class="">
                    <router-link to="#" class="navbar-item">PIZZA</router-link>
                </element>
                <element class="">
                    <router-link to="#" class="navbar-item">STARTERS</router-link>
                </element>
                <element class="">
                    <router-link to="#" class="navbar-item">MOST ORDERED</router-link>
                </element>
                <element class="">
                    <router-link to="#" class="navbar-item">MAIN</router-link>
                </element>
                <element class="">
                    <router-link to="#" class="navbar-item">SALAD</router-link>
                </element>
            </element>
        </div>   
    </nav>
</template>

<script>
  export default {
    name: 'AppNavBarMenu',
    data: () => ({})
  }
</script>


