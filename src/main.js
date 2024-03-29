import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./js/store";

Vue.config.productionTip = false
Vue.use(VueRouter);

export const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
