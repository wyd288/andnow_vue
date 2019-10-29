import Main from '@/components/main/Main';

export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/Login.vue'], resolve)
  },
  {
    path: '/register',
    name: 'register',
    component: resolve => require(['@/views/Register.vue'], resolve),
    meta: {
      title: '注册',
      activeName: 'register'
    }
  },
  {
    path: '/about',
    component: Main,
    meta: {
      title: '首页'
    },
    //子路由
    children: [
      {
        //给当前路由页面设置默认值
        path: '',
        redirect: 'basedata'
      },
      {
        path: 'basedata1',
        name: 'basedata1',
        component: resolve => require(['@/components/dashboard/BaseData.vue'], resolve),
        meta: {
          title: '基础数据1'
        }
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Main,

    meta: {
      title: '首页面板'
    },
    //子路由
    children: [
      //给当前路由页面设置默认值
      // {
      //   path: '',
      //   redirect: 'basedata'
      // },
      {
        path: 'basedata',
        name: 'basedata',
        component: resolve => require(['@/components/dashboard/BaseData.vue'], resolve),
        meta: {
          title: '基础数据',
          activeName: 'basedata'
        }
      },
      {
        path: 'org',
        name: 'org',
        component: resolve => require(['@/components/dashboard/OrgManagement.vue'], resolve),
        meta: {
          title: '组织管理',
          activeName: 'org'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Main,
    meta: {
      title: '用户设置'
    },
    //子路由
    children: [
      {
        //给当前路由页面设置默认值
        path: '',
        redirect: 'personal'
      },
      {
        path: 'personal',
        name: 'personal-center',
        component: resolve => require(['@/components/user/PersonalCenter.vue'], resolve),
        meta: {
          title: '个人中心'
        }
      }
    ]
  }
];
