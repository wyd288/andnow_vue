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
      path: '/home',
      component: () => import('@/views/Home.vue'),
      //子路由
      children: [
        {
          //给当前路由页面设置默认值
          path: '',
          component: () => import('@/components/home/BaseData.vue')
          // redirect: '/home/basedata'
        },
        {
          path: '/home/basedata',
          component: () => import('@/components/home/BaseData.vue')
        },
        {
          path: '/home/org',
          component: () => import('@/components/home/OrgManagement.vue')
        }
      ]
    }
  ]
});
