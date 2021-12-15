import Vue from 'vue'
import Router from 'vue-router'
import card from '@/components/card' 
import login from '@/components/login'
import Home from '@/components/Home'
import About from '@/components/About'
import Archieve from '@/components/Archieve'
import side from '@/components/side'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/', // 一级路由
      name: 'login',
      redirect: '/login',
      component: login
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Archieve',
      name: 'Archieve',
      component: Archieve
    },
    {
      path: '/side',
      name: 'side',
      component: side
    }

  ]
})
