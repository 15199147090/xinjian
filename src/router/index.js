import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import login from '@/components/login'
import Product from '@/components/home/Product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
