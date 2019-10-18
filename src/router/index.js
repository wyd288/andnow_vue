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
      meta: {
        breadCrumbs: [{ name: '首页', path: '/home' }, { name: '', path: '' }, { name: '', path: '' }]
      },
      //子路由
      children: [
        {
          //给当前路由页面设置默认值
          path: '',
          component: () => import('@/components/home/BaseData.vue'),
          meta: {
            breadCrumbs: [{ name: '首页', path: '/home' }, { name: '基础数据', path: '/home/basedata' }, { name: '', path: '' }]
          }
          // redirect: '/home/basedata'
        },
        {
          path: '/home/basedata',
          component: () => import('@/components/home/BaseData.vue'),
          meta: {
            breadCrumbs: [{ name: '首页', path: '/home' }, { name: '基础数据', path: '/home/basedata' }, { name: '', path: '' }]
          }
        },
        {
          path: '/home/org',
          component: () => import('@/components/home/OrgManagement.vue'),
          meta: {
            breadCrumbs: [{ name: '首页', path: '/home' }, { name: '组织管理', path: '/home/org' }, { name: '', path: '' }]
          }
        }
      ]
    }
  ]
});
