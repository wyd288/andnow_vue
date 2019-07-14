
import BaseData from '@/components/home/BaseData'
import OrgManagement from '@/components/home/OrgManagement'
import Register from '@/components/home/Register'

export default [
    // {
    //   //将根路径重定向到login页面
    //   path: '/',
    //   redirect: '/home/news'
    // },   
    {
      path: '/home/basedata',
      component: BaseData
    },
    {
      path: '/home/orgmanagement',
      component: OrgManagement
    },
    {
      path: '/home/register',
      component: Register
    },
  ]