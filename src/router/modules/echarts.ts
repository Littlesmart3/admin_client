import { RouteComponent } from 'vue-router';

export default [
  {
    path: '/echarts/bar',
    name: 'bar',
    meta: { requireAuth: true },
    component: (): RouteComponent => import('@/views/echarts/bar/index.vue') //柱状图
  },
  {
    path: '/echarts/pie',
    name: 'pie',
    meta: { requireAuth: true },
    component: (): RouteComponent => import('@/views/echarts/pie/index.vue') //饼图
  },
  {
    path: '/echarts/map',
    name: 'map',
    meta: { requireAuth: true },
    component: (): RouteComponent => import('@/views/echarts/map/index.vue') //地图
  }
];
