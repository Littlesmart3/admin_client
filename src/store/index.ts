import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import tabs from './modules/tabs';
import user_info from './modules/user-info';
import persistedstate from './plugins/persistedstate';

const modules = { tabs, user_info };

export default createStore({
  state: {
    aaa: 123
  },
  modules,
  plugins: [
    persistedstate({
      modules,
      path: ['tabs', 'user_info'],
      storage: window.sessionStorage
    })
  ]
});

export type ModulesStateType = { [key in keyof typeof modules]: typeof modules[key]['state'] };
export interface VuexState extends ModulesStateType {}
