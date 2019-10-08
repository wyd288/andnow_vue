// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


//设置axios的基础url，在后面的请求中就可以不用写/api
axios.defaults.baseURL="/api";
// 设置请求超时时间
axios.defaults.timeout = 5000 
//将axios注册到Vue对象中进行请求
Vue.prototype.$axios = axios;

Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
