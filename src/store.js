import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let interval = null;

export default new Vuex.Store({
  state: {
    first: {
      time: 120000,
      active: true,
    },
    second: {
      time: 120000,
      active: false,
    },
  },
  mutations: {
    decrement(state) {
      if (state.first.time <= 0 || state.second.time <= 0) {
        this.stop();
        return;
      }
      state.first.active ? state.first.time -= 10 : state.second.time -= 10;
    },
    activeFirst(state) {
      state.first.active = true;
      state.second.active = false;
    },
    activeSecond(state) {
      state.first.active = false;
      state.second.active = true;
    },
    resetState(state) {
      state.first.time = 120000;
      state.second.time = 120000;
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
    reset() {
      this.commit('resetState');
    },
    activeFirst() {
      this.commit('activeFirst');
    },
    activeSecond() {
      this.commit('activeSecond');
    },
  },
});
