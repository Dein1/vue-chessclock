import Vue from 'vue';
import Router from 'vue-router';
import TimerPanel from './components/TimerPanel.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/1',
      name: 'first',
      component: TimerPanel,
      beforeEnter: (to, from, next) => {
        store.dispatch('activeFirst');
        next();
      },
      alias: '/',
    },
    {
      path: '/2',
      name: 'second',
      component: TimerPanel,
      beforeEnter: (to, from, next) => {
        store.dispatch('activeSecond');
        next();
      },
    },
  ],
});
