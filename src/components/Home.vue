<template>
  <div>
    <Notification v-if="this.showNotification" v-bind:message="this.messageForNotification"></Notification>
    <div id="nav-bar-container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary"
           style="width: 100%; position: absolute; left: 0; top: 0">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" v-on:click="changeState('prenotazioni')">Le tue lezioni</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="changeState('aggiungiPrenotazioni')">Prenota lezioni</a>
            </li>
            <li class="nav-item" style="cursor: pointer">
              <a class="nav-link" v-on:click="changeState('lezioniPassate')">Lezioni passate o cancellate</a>
            </li>
            <li class="nav-item" style="cursor: pointer">
              <a class="nav-link" v-on:click="changeState('aggiungiProfessore')" v-if="this.role === 'ADMIN'">Aggiungi
                professore</a>
            </li>
            <li class="nav-item" style="cursor: pointer">
              <a class="nav-link" v-on:click="changeState('aggiungiMateria')" v-if="this.role === 'ADMIN'">Aggiungi
                materia</a>
            </li>
            <li class="nav-item" style="cursor: pointer">
              <a class="nav-link" v-on:click="changeState('aggiungiAssociazione')"
                 v-if="this.role === 'ADMIN'">Aggiungi
                associazione</a>
            </li>
            <li class="nav-item" style="cursor: pointer">
              <a class="nav-link" v-on:click="changeState('visualizzaLezioniDiUtente');"
                 v-if="this.role === 'ADMIN'">Visualizza lezioni di un utente</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div v-if="this.currentState === 'prenotazioni'">
      Prenotazioni
    </div>

    <div v-else-if="this.currentState === 'aggiungiPrenotazioni'">
      Aggiungi una prenotazione
    </div>

    <div v-else-if="this.currentState === 'lezioniPassate'">
      Lezioni passate
    </div>
    <div v-else-if="this.currentState === 'aggiungiProfessore'">
      Aggiungi un professore
    </div>
    <div v-else-if="this.currentState === 'aggiungiMateria'">
      Aggiungi una materia
    </div>
    <div v-else-if="this.currentState === 'aggiungiAssociazione'">
      Aggiungi una associazione
    </div>
    <div v-else-if="this.currentState === 'visualizzaLezioniDiUtente'">
      Visualizza le lezioni di un utente
    </div>
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
      messageForNotification: '',
      currentState: 'prenotazioni'
    }
  },
  mounted() {
    if(Cookies.get('username')!=null || Cookies.get('role')!=null) {
      this.username = Cookies.get('username');
      this.role = Cookies.get('role');
      this.showNotification = true;
      this.messageForNotification = `You're logged as: ${this.username}`
    } else {
      this.$router.push('/login');
    }
  },
  methods: {
    changeState: function (newState) {
      this.currentState = newState;
      console.log("Nuovo stateo..." + newState);
    }
  }
}
</script>

<style scoped>

</style>