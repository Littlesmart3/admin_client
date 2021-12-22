import { HomeFilled, Shop, Setting } from '@element-plus/icons-vue';

export const menu_list = [
  { id: 1, name: '首页', parent_id: 0, icon: HomeFilled, children: [] },
  {
    id: 2,
    name: '商品',
    parent_id: 0,
    icon: Shop,
    children: [
      { id: 21, name: '商品A', parent_id: 2, icon: null, children: [{ id: 201, name: '商品B', parent_id: 21, icon: null }] },
      { id: 22, name: '商品C', parent_id: 2, icon: null, children: [] }
    ]
  },
  { id: 9, name: '设置', parent_id: 0, icon: Setting, children: [{ id: 91, name: '个人中心', parent_id: 9, icon: null, children: [] }] }
];
