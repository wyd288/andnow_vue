import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'

Vue.use(Router)

export default new Router({
  //创建组件路由
  routes: [
    {
      path: '/',
      redirect: '/about'
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
      // children:[
      //   {
      //     //给当前路由页面设置默认值
      //     path:"",
      //     redirect:"/home/news"
      //   },
      //   {
      //     path: '/home/news',
      //     component: News
      //   },
      //   {
      //     path: '/home/message',
      //     component: Message
      //   }
      // ]
    }
  ]
})
