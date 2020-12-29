import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SignupForm from '../components/SignupForm'







Vue.use(VueRouter)



const routes = [


  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SignupForm',
    name: 'SignupForm',
    component: SignupForm
  },


  
  

  
  
  {
    path: '*',
    redirect: '/'
  }
]






const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

});

export default router