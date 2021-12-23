import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import tabs from './modules/tabs';
import user_info from './modules/user-info';

const modules = { tabs, user_info };

export default createStore({
  state: {
    aaa: 123
  },
  modules: {
    tabs,
    user_info
  },
  plugins: [createPersistedState()]
});

export type ModulesStateType = { [key in keyof typeof modules]: typeof modules[key]['state'] };
export interface VuexState extends ModulesStateType {}
