import { createStore } from 'vuex'
import login from './login'

// 此处和router类似
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export default store
