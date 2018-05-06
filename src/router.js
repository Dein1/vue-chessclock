import Vue from 'vue';
import Router from 'vue-router';
import Timer from './components/Timer.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'first',
      component: Timer,
      beforeEnter: (to, from, next) => {
        store.commit('activeFirst');
        next();
      },
      alias: '/',
    },
    {
      path: '/2',
      name: 'second',
      component: Timer,
      beforeEnter: (to, from, next) => {
        store.commit('activeSecond');
        next();
      },
    },
  ],
});
