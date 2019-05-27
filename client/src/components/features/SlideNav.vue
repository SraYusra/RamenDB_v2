<template>
    <div class="burger">
      <Slide>
      <a id="home" href="/"> 
        <span>Projects/Services</span>  
      </a>
      <a id="upload" href="/upload"> 
        <span>Upload</span>  
      </a>
      </Slide>
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
.burger {
  position: fixed;
}
</style>