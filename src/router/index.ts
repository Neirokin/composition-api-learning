import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '@/views/ProductsPage.vue'
import RestaurantsPage from '@/views/RestaurantsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Restaurants',
      component: RestaurantsPage,
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsPage,
    },
  ],
})

export default router
