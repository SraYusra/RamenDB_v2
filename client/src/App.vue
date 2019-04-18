<template>
  <div id="app">
    <navbar></navbar>
    <slidenav></slidenav>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/features/NavBar'
import slidenav from '@/components/features/SlideNav'
export default {
  name: 'app',
  components: {
    'navbar': navbar,
    'slidenav': slidenav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
