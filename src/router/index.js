import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../components/HomePage.vue'),
  },
  {
    path: '/publications',
    name: 'PublicationList',
    component: () => import('../components/PublicationList.vue')
  },
  {
    path: '/awards',
    name: 'AwardList',
    component: () => import('../components/AwardList.vue')
  },
  {
    path: '/experiences',
    name: 'ExperienceList',
    component: () => import('../components/ExperienceList.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;