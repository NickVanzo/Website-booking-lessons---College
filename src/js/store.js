import Vue from 'vue';
import Vuex from 'vuex';

/**
 * Components import
 */
import LoginPage from "../components/LoginPage";
import Home from "../components/Home";

Vue.use(Vuex);

export const routes = [
    {path: '/home', component: Home},
    {path: '/login', component: LoginPage}
]


export default new Vuex.Store({
    state: {
        username: '',
        isLogged: false,
        role: ''
    },
    mutations: {
        setUsername(state, payload) {
            state.username = payload.username;
        },
        setIsLogged(state, payload) {
            state.isLogged = payload.isLogged;
        },
        setRole(state, payload) {
            state.role = payload.role;
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