import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'

Vue.use(Vuex)
Vue.prototype.$http = axios;




export default new Vuex.Store({
    
    actions: {

    },








    plugins: [createPersistedState()],
  });