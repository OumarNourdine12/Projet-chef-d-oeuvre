import Vue from 'vue'
import App from './App.vue'
import router from './route/routes'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// import VuePlaceAutocomplete from 'vue-place-autocomplete';
// Vue.use(VuePlaceAutocomplete);



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.prototype.$http = axios;
Vue.use(router)




new Vue({
  router,

  render: h => h(App),
}).$mount('#app')

