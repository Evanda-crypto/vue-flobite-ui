import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Services from '@/components/Services/Services.vue'
import Gallery from '@/components/Gallery.vue'
import Contact from '@/components/Contact.vue'
import ApplyService from '@/components/Services/ApplyService.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/services/:id',
    name: 'apply',
    component: ApplyService
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
