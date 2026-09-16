import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/pages/Events.vue'),
  },
  {
    path: '/events/:id',
    name: 'EventDetail',
    component: () => import('@/pages/EventDetail.vue'),
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('@/pages/Teams.vue'),
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/pages/Gallery.vue'),
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: () => import('@/pages/Sponsors.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
  },
  {
    path: '/founders',
    name: 'Founders',
    component: () => import('@/pages/Founders.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
