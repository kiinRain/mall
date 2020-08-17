import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentGoodInfo: {}
  },
  mutations: {
    changeCurrentGoodInfo(state, payload) {
      console.log(payload);
      state.currentGoodInfo = payload.currentGoodInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
