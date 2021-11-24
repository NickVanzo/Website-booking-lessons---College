<template>
  <div class="row align-items-center" style="padding-top: 7%">
    <div class="col"></div>
    <div class="col">
      <div id="form-login-bl" style="text-align: center; ">
        <h1>Welcome to BookingLessons!</h1>
        <div class="card" style="background: azure">
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <form novalidate>
              <div class="form-group">
                <label for="username-input">Nome utente</label>
                <input v-model="username" type="text" class="form-control"
                       id="username-input"
                       aria-describedby="usernameHelp" placeholder="Nome utente">
                <small id="emailHelp" class="form-text text-muted">Non condivideremo informazioni con nessuno!</small>
              </div>
              <div class="form-group">
                <label for="password-input">Password</label>
                <input v-model="password" type="password" class="form-control"
                       id="password-input" placeholder="Password">
                <small id="passwordHelp" class="form-text text-muted">Non condividere la tua password con nessuno!</small>
              </div>
              <button id="login_button" type="button" class="btn btn-primary"
                      v-on:click="handleLogin">Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin: function () {
      this.$store.commit('setUsername', this.username);
      this.$store.commit('setIsLogged', true);
      this.$store.commit('setRole', 'ADMIN');
      console.log(this.$store.getters.getIsLogged);
      console.log(this.$store.getters.getUsername);
      console.log(this.$store.getters.getRole);
    }
  }
}
</script>

<style scoped>

</style>