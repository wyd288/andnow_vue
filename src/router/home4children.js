
import BaseData from '../components/BaseData'
import OrgManagement from '../components/OrgManagement'

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
    }
  ]