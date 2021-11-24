import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
        isLogged: false,
        role: ''
    },
    mutations: {
        setUsername(state, newName) {
            state.username = newName;
        },
        setIsLogged(state, logStatus) {
            state.isLogged = logStatus;
        },
        setRole(state, role) {
            state.role = role;
        }
    },
    getters: {
        getUsername: state => {
            return state.username
        },
        getIsLogged: state => {
            return state.isLogged
        },
        getRole: state => {
            return state.role
        },
    }
})