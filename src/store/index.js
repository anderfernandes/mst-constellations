import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    SET_COUNT(state, payload) { Object.assign( state, { count: payload }) },
    INCREMENT_COUNT(state) { Object.assign( state, { count: state.count++ }) }
  },
  actions: {
  },
  modules: {
  }
})
