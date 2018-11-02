import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/RegisterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RegisterPage',
      component: Register
    }
  ]
})
