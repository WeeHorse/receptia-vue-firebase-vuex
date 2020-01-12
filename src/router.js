import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

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
      path: '/burgers',
      name: 'burgers',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Burgers.vue')
    },
    {
      path: '/soups',
      name: 'soups',
      component: () => import(/* webpackChunkName: "soups" */ './views/Soups.vue')
    },
    {
      path: '/desserts',
      name: 'desserts',
      component: () => import(/* webpackChunkName: "desserts" */ './views/Desserts.vue')
    }
  ]
})
