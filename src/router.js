import Vue from 'vue';
import Router from 'vue-router';
import TimerPanel from './views/TimerPanel.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: TimerPanel,
      beforeEnter: (to, from, next) => {
        store.commit('activeFirst');
        next();
      },
      alias: '/1',
    },
    {
      path: '/2',
      name: 'second',
      component: TimerPanel,
      beforeEnter: (to, from, next) => {
        store.commit('activeSecond');
        next();
      },
    },
  ],
});
