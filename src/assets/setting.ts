import { HomeFilled, Shop, Setting } from '@element-plus/icons-vue';
export interface menuType {
  id: number;
  name: string;
  parent_id: number;
  icon: any;
  children: any[];
  path: string | null;
}

export const menu_list: Array<menuType> = [
  { id: 1, name: '首页', parent_id: 0, icon: HomeFilled, children: [], path: '/' },
  { id: 2, name: '商品', parent_id: 0, icon: Shop, children: [], path: null },
  { id: 6, name: 'Echarts', parent_id: 0, icon: Shop, children: [], path: null },
  { id: 7, name: 'Excel', parent_id: 0, icon: Shop, children: [], path: null },
  { id: 9, name: '设置', parent_id: 0, icon: Setting, children: [], path: null },
  { id: 21, name: '商品A', parent_id: 2, icon: null, children: [], path: null },
  { id: 22, name: '商品C', parent_id: 2, icon: null, children: [], path: '/goods/goodsc' },
  { id: 61, name: '柱状图', parent_id: 6, icon: Shop, children: [], path: '/echarts/bar' },
  { id: 62, name: '饼图', parent_id: 6, icon: Shop, children: [], path: '/echarts/pie' },
  { id: 63, name: '地图', parent_id: 6, icon: Shop, children: [], path: '/echarts/map' },
  { id: 71, name: 'Excel处理', parent_id: 7, icon: Shop, children: [], path: '/excel/handle' },
  { id: 91, name: '个人中心', parent_id: 9, icon: null, children: [], path: '/setting/personal-center' },
  { id: 201, name: '商品B', parent_id: 21, icon: null, children: [], path: '/goods/goodsb' }
];
