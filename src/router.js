import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import personal from './views/Personal.vue';
import business from './views/Business.vue';
import login from './views/Login.vue';
import register from './views/Register.vue';

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
    
    
    
  ]
})
