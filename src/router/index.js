import { createRouter, createWebHistory } from 'vue-router'
import HomeWiew from '../views/HomeView.vue'
import Apropos from '../components/Apropos.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name:'home',
      component: HomeWiew
    },
    {
      path: '/Apropos',
      name:'Apropos',
      component: Apropos
    },
    {
      path:'/PageNotFound',
      name: '/PageNotFound',
      component: PageNotFound
    },
    {
      path:'/:pathMatch(.*)*',
      redirect:'/PageNotFound'
    }
  ]
});
export default router
