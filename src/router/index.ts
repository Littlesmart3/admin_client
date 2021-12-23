import { createRouter, createWebHashHistory, RouteComponent, RouteRecordRaw } from 'vue-router';
import moment from 'moment';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'index',
  //   meta: { requireAuth: true },
  //   component: (): RouteComponent => import('@/components/layout/index.vue') //首页
  // },
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
      {
        path: '/setting/personal-center',
        name: 'personal-center',
        meta: { requireAuth: true },
        component: (): RouteComponent => import('@/views/setting/personal-center/index.vue') //登录页面
      }
    ]
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
