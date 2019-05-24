<template>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- slidenav is created in features/SlideNav.vue -->
    <slidenav></slidenav>
    <div class="navbar-item" width="1700">
      <a style="text-decoration: none" href="/">
        <img src="../../assets/logo.png" width="50" height="60">
        <div class="logo">Ramen Database</div>
      </a>
    </div>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
    
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import slidenav from '@/components/features/SlideNav'
export default {
  name: 'Navbar',
  components: {
    'slidenav': slidenav
  }
}
</script>

<style scoped>
  .navbar {
    background: #a2adad;
    position: sticky; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%;
    height: 100px;
  }
  .navbar-brand {
      padding: 0px 0px;
      float: fixed;
      margin-left: 40 px;
  }

  .navbar-item {
     padding: 10px 0px;
  }

  .slidenav {
    align: start;
  }
  .logo {
    padding: 0px 0px;
      color: black;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      font-size: 100%;
  }
</style>
