import Vue from 'vue'
import App from './App.vue'
import router from './route/routes'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(Vuelidate)
Vue.use(router)
Vue.config.productionTip = false


new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
