import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id',
      name: 'recipe',
      props: true,component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ],
  mode: 'history'
})
