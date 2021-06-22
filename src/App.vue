<template>
    <div id="entire_app" style="-webkit-app-region: drag">
        <navbar/>       
        <router-view />
        <a href="https://twitter.com/home" target="_blank">Twitter</a>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss"> 
    #entire_app {
        background-color: green;
    }
</style>
