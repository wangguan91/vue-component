import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: () => import("@/views/home/index") }, // 首页组件列表
  { path: '/component', component: () => import("@/views/component/index") },
]


const rotuers = new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export default rotuers