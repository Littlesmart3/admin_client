import { ActionContext } from 'vuex';
import { AnyObject } from '@/assets/interface';

const state = {
  user_info: [1] as any[]
};
const mutations = {
  setProcurementClass(state: AnyObject, payload: AnyObject): void {
    state.user_info = payload;
  }
};
const actions = {
  // 获取采购类型
  async getProcurementClass(context: ActionContext<any, any>): Promise<any> {
    try {
      return [1, 2, 3, 4, 5];
    } catch (error) {
      return [];
    }
  }
};
const getters = {
  // 根据使用状态排序采购类型
  handlerProcurementClassForState: (state: AnyObject) => (): Array<AnyObject> => {
    return [];
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};

export type ModulesStateType = { state: typeof state };
