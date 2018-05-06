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
      props: {
        firstActive: true,
      },
      component: TimerPanel,
      beforeEnter: (to, from, next) => {
        store.commit('activeFirst');
        next();
      },
      alias: '/',
    },
    {
      path: '/2',
      name: 'second',
      props: {
        firstActive: false,
      },
      component: TimerPanel,
      beforeEnter: (to, from, next) => {
        store.commit('activeSecond');
        next();
      },
    },
  ],
});
