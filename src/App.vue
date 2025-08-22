<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
              Home
          </router-link>
          <router-link to="/publications" class="navbar-item">
              Publications
          </router-link>
          <router-link to="/awards" class="navbar-item">
              Honors
          </router-link>
          <router-link to="/experiences" class="navbar-item">
              Experiences
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
