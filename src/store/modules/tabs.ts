import { ActionContext } from 'vuex';
import { AnyObject } from '@/assets/interface';

interface TabsModulesStateType {
  tags_list: AnyObject;
}

const state: TabsModulesStateType = {
  tags_list: [
    {
      to: '/',
      label: '首页',
      name: '/',
      param: {}
    }
  ]
};
const mutations = {
  setTagsList(state: TabsModulesStateType, payload: AnyObject): void {
    state.tags_list = payload;
  }
};
const actions = {
  async tabClose(val: any) {
    state.tags_list = state.tags_list.filter((item: any) => item.id !== val.id);
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
};

export type ModulesStateType = { state: typeof state };
