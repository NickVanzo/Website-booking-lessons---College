<template>
  <div>
    <Notification v-if="this.showNotification" v-bind:message="this.messageForNotification"></Notification>
    <p>Hello {{this.username}}, you're a: {{this.role}}</p>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import Notification from "./Notification";

export default {
  name: "Home",
  components: {Notification},
  data: function() {
    return {
      username: '',
      role: '',
      isLogged: '',
      showNotification: false,
      messageForNotification: ''
    }
  },
  mounted() {
    this.username = Cookies.get('username');
    this.role = Cookies.get('role')
    this.showNotification = true;
    this.messageForNotification = `You're logged as: ${this.username}`
  }
}
</script>

<style scoped>

</style>