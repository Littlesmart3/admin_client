import { ActionContext } from 'vuex';
import { AnyObject } from '@/assets/interface';

interface TabsModulesStateType {
  tags_list: AnyObject;
}

const state: TabsModulesStateType = {
  tags_list: [
    { title: 'Tab 1', id: 1, path: '/' },
    { title: 'Tab 2', id: 2, path: '/' },
    { title: 'Tab 3', id: 3, path: '/' }
  ]
};
const mutations = {
  setTagsList(state: TabsModulesStateType, payload: AnyObject): void {
    state.tags_list = payload;
  }
};
const actions = {
  async getTagsList(context: ActionContext<any, any>): Promise<any> {
    try {
      return [1, 2, 3, 4, 5];
    } catch (error) {
      return [];
    }
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
