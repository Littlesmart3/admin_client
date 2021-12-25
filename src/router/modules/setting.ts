import { RouteComponent } from 'vue-router';

export default [
  {
    path: '/setting/personal-center',
    name: 'personal-center',
    meta: { requireAuth: true },
    component: (): RouteComponent => import('@/views/setting/personal-center/index.vue') //登录页面
  }
];
