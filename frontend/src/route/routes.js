import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SignupForm from '../components/SignupForm'
import SigninForm from '../components/SigninForm'







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
    path: '/SigninForm',
    name: 'SigninForm',
    component: SigninForm
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