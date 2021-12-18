import { createRouter, createWebHistory, RouteComponent, RouteRecordRaw } from 'vue-router';
import home from '../views/home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: (): RouteComponent => import('@/views/home/index.vue') //首页
  },
  {
    path: '/login',
    name: 'login',
    component: (): RouteComponent => import('@/views/login/index.vue') //登录页面
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
