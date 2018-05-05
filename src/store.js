import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let interval;

export default new Vuex.Store({
  state: {
    firstActive: true,
    first: 1000,
    second: 1000,
  },
  mutations: {
    decrement(state) {
      if (state.first <= 0 || state.second <= 0) {
        clearInterval(interval);
        return;
      } // eslint-disable-next-line
      state.firstActive ? state.first -= 1 : state.second -= 1;
    },
    activeFirst(state) { // eslint-disable-next-line
      state.firstActive = true;
    },
    activeSecond(state) { // eslint-disable-next-line
      state.firstActive = false;
    },
  },
  actions: {
    start({ commit }) {
      interval = setInterval(() => {
        commit('decrement');
      }, 1);
    },
    stop() {
      clearInterval(interval);
    },
  },
});
