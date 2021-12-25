import { createRouter, createWebHashHistory, RouteComponent, RouteRecordRaw } from 'vue-router';
import moment from 'moment';
import echarts from './modules/echarts';
import excel from './modules/excel';
import setting from './modules/setting';
import ErrorPage from '@/components/error-page/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: (): RouteComponent => import('@/views/login/index.vue') //登录页面
  },
  {
    path: '/',
    name: 'index',
    component: (): RouteComponent => import('@/components/layout/index.vue'), //首页
    children: [
      {
        path: '',
        name: 'home',
        meta: { requireAuth: true },
        component: (): RouteComponent => import('@/views/home/index.vue') //首页
      },
      ...echarts,
      ...excel,
      ...setting
    ]
  },
  {
    path: '/404',
    name: '404',
    component: ErrorPage
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (localStorage.info) {
      router.push('/');
      next();
    } else next();
  } else if (to.meta?.requireAuth) {
    if (localStorage.info) {
      if (moment(new Date()).unix() > JSON.parse(localStorage.info).expire_time) localStorage.clear();
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
