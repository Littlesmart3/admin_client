import { store } from '@/store';
import { createRouter, createWebHashHistory, RouteComponent, RouteRecordRaw } from 'vue-router';
import moment from 'moment';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: { requireAuth: true },
    component: (): RouteComponent => import('@/components/layout/index.vue') //首页
  },
  {
    path: '/login',
    name: 'login',
    meta: { requireAuth: true },
    component: (): RouteComponent => import('@/views/login/index.vue') //登录页面
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta?.requireAuth) {
    if (localStorage.info) {
      if (moment(new Date()).unix() > JSON.parse(localStorage.info).expire_time) {
        localStorage.clear();
        next();
      }
      if (to.path === '/login') {
        router.push('/');
        next();
        return;
      }
      next();
    } else {
      router.push('/login');
      next();
    }
  } else {
    next();
  }
});

export default router;
