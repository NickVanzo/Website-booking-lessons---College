<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from "./js/store";



export default {
  name: 'App',
  store: store,
  data: function () {
    return {
      isLogged: false,
      username: '',
      role: ''
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
