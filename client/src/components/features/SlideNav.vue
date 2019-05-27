<template>
    <div>
      <Slide>
      <a id="home" href="/"> 
        <span>Home</span>  
      </a>
      <a id="upload" href="/upload"> 
        <span>Upload</span>  
      </a>
      </Slide>
      <!--
      <h2>Nav Bar</h2>
      <nav>
        <router-link class="spacing" v-for="routes in links" 
             v-bind:key="routes.id" 
             :to="`${routes.page}`"></router-link>
      </nav>
      -->
    </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'slidenav',
  components: {
    Slide
  }
}
</script>

<style scoped>
</style>