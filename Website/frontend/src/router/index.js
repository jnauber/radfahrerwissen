import Vue from 'vue'
import Router from 'vue-router'
import Tour from '@/components/Tour'
import Detail from '@/components/Detail'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tour
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
