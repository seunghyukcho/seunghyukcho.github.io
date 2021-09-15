<template>
  <div id="app">
    <b-navbar>
      <template #brand>
        <b-navbar-item href='#'>
            <img
                src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                alt="Lightweight UI components for Vue.js based on Bulma"
            >
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item href="#">
            Publications
        </b-navbar-item>
        <b-navbar-item href="#">
            Awards
        </b-navbar-item>
        <b-navbar-item href="#">
            Projects
        </b-navbar-item>
        <b-navbar-dropdown label="Others">
          <b-navbar-item href="#">
              GitHub
          </b-navbar-item>
          <b-navbar-item href="#">
              Brunch
          </b-navbar-item>
          <b-navbar-item href="#">
              Tech Blog
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
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
