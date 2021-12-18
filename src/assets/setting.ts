import { HomeFilled, Shop, Setting } from '@element-plus/icons-vue';

export const menu_list = [
  { id: 1, name: '主页', parent_id: 0, icon: HomeFilled, children: [] },
  { id: 2, name: '商品', parent_id: 0, icon: Shop, children: [{ id: 10, name: '商品A', parent_id: 2, icon: null, children: {} }] },
  { id: 3, name: '设置', parent_id: 0, icon: Setting, children: [] }
];
