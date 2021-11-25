<template>
  <div>
    <p>Hello {{this.username}}, you're a: {{this.role}}</p>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: "Home",
  data: function() {
    return {
      username: '',
      role: '',
      isLogged: ''
    }
  },
  mounted() {
    this.username = Cookies.get('username');
    this.role = Cookies.get('role')
  }
}
</script>

<style scoped>

</style>