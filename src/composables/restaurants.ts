import { ref } from 'vue'
import type { IRestaurant } from '@/typescript/interfaces'
import { productsApi } from '@/api/products'
import router from '@/router'

export function useRestaurants() {
  // Запрос списка ресторанов
  const restaurants = ref<IRestaurant[]>([])
  productsApi.getRestaurantsMock().then((resp) => {
    restaurants.value = resp
  })

  function redirectToProducts(restaurantId: number) {
    router.push({ path: '/products', query: { restaurantId: restaurantId } })
  }

  return {
    restaurants,
    redirectToProducts,
  }
}
