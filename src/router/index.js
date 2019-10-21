import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: history,
  //创建组件路由
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/index',
      component: () => import('@/views/Index.vue'),

      meta: {
        title: '首页'
      },
      //子路由
      children: [
        {
          //给当前路由页面设置默认值
          path: '',
          redirect: '/dashboard/basedata'
        },
        {
          path: '/dashboard/basedata',
          name: 'basedata',
          component: () => import('@/components/home/BaseData.vue'),
          meta: {
            title: '基础数据'
          }
        },
        {
          path: '/dashboard/org',
          name: 'org',
          component: () => import('@/components/home/OrgManagement.vue'),
          meta: {
            title: '组织管理'
          }
        }
      ]
    }
  ]
});
