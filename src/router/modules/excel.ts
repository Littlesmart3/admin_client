import { RouteComponent } from 'vue-router';

export default [
  {
    path: '/excel/handle',
    name: 'bar',
    meta: { requireAuth: true },
    component: (): RouteComponent => import('@/views/excel/handle/index.vue') //柱状图
  }
];
