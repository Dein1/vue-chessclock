import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let interval = null;

export default new Vuex.Store({
  state: {
    firstActive: true,
    first: 12000,
    second: 12000,
  },
  mutations: {
    decrement(state) {
      if (state.first <= 0 || state.second <= 0) {
        this.stop();
        return;
      } // eslint-disable-next-line
      state.firstActive ? state.first -= 1 : state.second -= 1;
    },
    activeFirst(state) {
      state.firstActive = true;
    },
    activeSecond(state) {
      state.firstActive = false;
    },
    reset(state) {
      state.first = 12000;
      state.second = 12000;
    },
  },
  actions: {
    start({ commit }) {
      if (interval === null) {
        interval = setInterval(() => {
          commit('decrement');
        }, 10);
      }
    },
    stop() {
      clearInterval(interval);
      interval = null;
    },
  },
});
