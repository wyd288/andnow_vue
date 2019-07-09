
import News from '../views/News'
import Message from '../views/Message'


export default [
    // {
    //   //将根路径重定向到login页面
    //   path: '/',
    //   redirect: '/home/news'
    // },   
    {
      path: '/home/news',
      component: News
    },
    {
      path: '/home/message',
      component: Message
    }
  ]