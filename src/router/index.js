import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Pub from '../components/Pub.vue';
import Award from '../components/Award.vue';
import Exp from '../components/Exp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/publications',
    name: 'Pub',
    component: Pub
  },
  {
    path: '/awards',
    name: 'Award',
    component: Award
  },
  {
    path: '/experiences',
    name: 'Exp',
    component: Exp
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
