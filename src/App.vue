<template>
  <div id="app">
    <b-navbar>
      <template #end>
        <b-navbar-item tag="router-link" :to="{path: '/'}">
            Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{path: '/publications'}">
            Publications
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{path: '/awards'}">
            Awards
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{path: '/experiences'}">
            Experiences
        </b-navbar-item>
      </template>
    </b-navbar>
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
