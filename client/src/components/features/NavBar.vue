<template>
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item" width="1500">
      <img src="../../assets/logo.png" width="50" height="60">
      <div class="logo">Ramen Database</div>
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
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  .navbar {
    background: #ecce9d;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%;
    height: 100px;
  }
  .navbar-brand {
      padding: 10px 0px;
      float: centre;
      margin-left: 40 px;
  }
  .logo {
      font-family:fantasy;
      font-size: 100%;
  }
</style>
