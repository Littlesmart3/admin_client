import { HomeFilled, Shop, Setting } from '@element-plus/icons-vue';

export const menu_list = [
  { id: 1, name: '首页', parent_id: 0, icon: HomeFilled, children: [] },
  {
    id: 2,
    name: '商品',
    parent_id: 0,
    icon: Shop,
    children: [
      { id: 10, name: '商品A', parent_id: 2, icon: null, children: [{ id: 100, name: '商品B', parent_id: 10, icon: null }] },
      { id: 11, name: '商品C', parent_id: 2, icon: null, children: [] }
    ]
  },
  { id: 3, name: '设置', parent_id: 0, icon: Setting, children: [] }
];
