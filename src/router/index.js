import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

import Login from '../views/Login'

//导入home组件的子路由
import HomeChildren from './home4children.js'

Vue.use(Router)

export default new Router({
  //创建组件路由
  routes: [
    {
      //将根路径重定向到login页面
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      //导入子路由
      children: HomeChildren
    }
  ]
})
