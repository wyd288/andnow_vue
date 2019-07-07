import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  //创建组件路由
  routes: [
    {
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
      //子路由的两种写法
      children:[
        
        {
          path: '/home/news',
          component: News
        },
        {
          path: '/home/message',
          component: Message
        }
      ]
    }
  ]
})
