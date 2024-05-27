import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import PredictionView from './views/PredictionView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/prediction',
    name: 'Prediction',
    component: PredictionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
