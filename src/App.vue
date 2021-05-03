<template>
    <div id="entire_app" style="-webkit-app-region: drag">
        <navbar/>       
        <router-view />
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
        
    }
</style>
