// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import VueRouter from "vue-router"

// element: 1.导入组件
import ElementUI from "element-ui"
// element的样式
import 'element-ui/lib/theme-chalk/index.css';

// 导入组件
import Login from "./pages/Login.vue";

// element: 2.注册element插件
Vue.use(ElementUI);

// 注册路由
Vue.use(VueRouter);

// 配置路由
const routes = [
  {path: "/login", component: Login}
];

// 路由实例
const router = new VueRouter({ routes });
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
