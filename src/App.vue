<template>
    <div id="entire_app" style="-webkit-app-region: drag">
        <navbar/>       
        <router-view />
        <!-- <a href="https://twitter.com/home" target="_blank">Twitter</a> -->
        <iframe src="https://twitter.com/home" frameborder="0" width="600" height="500"></iframe>
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