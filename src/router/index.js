import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
  {path: '/', redirect: '/userinfo'},
  {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
  },
  
  {
    path: 'home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: 'about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: 'userinfo',
    name: 'Userinfo',
    component: () => import('../views/UserInfo.vue')
  }
] 



const createRouter = () => new Router({
  routes: commonRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router
// export default new Router({
//   //创建组件路由
//   routes: [
//     {
//       //将根路径重定向到login页面
//       path: '/',
//       redirect: '/login'
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: () => import('../views/Login.vue')
//     },
//     {
//       path: '/index',
//       name: 'Index',
//       component: () => import('../views/Index.vue')
//     },
//     {
//       path: '/home',
//       name: 'Home',
//       component: () => import('../views/Home.vue'),
//       //导入子路由
//       children: HomeChildren
//     }
//   ]
// })
