import { computed, reactive, ref } from 'vue'
import type { IProduct } from '@/typescript/interfaces'
import { productsApi } from '@/api/products'

export function useProduct() {
  interface IProductWithAmount {
    product: IProduct
    amount: number
  }

  // Запрос списка блюд
  const products = ref<IProduct[]>([])
  productsApi.getProducts().then((resp) => {
    products.value = resp
  })

  // Подсчёт количества блюд для кнопки открытия корзины
  const selectedProducts = reactive<IProductWithAmount[]>([])
  const selectedProductsAmount = computed(() => {
    return selectedProducts.reduce((accumulator, currSelectedValue) => {
      return accumulator + currSelectedValue.amount
    }, 0)
  })

  /**
   * Увеличивает количсетво одного блюда
   * @param product - Блюдо
   */
  function increaseProductCount(product: IProduct): void {
    const selectedProductIndex = getSelectedProductIndex(product.id, selectedProducts)

    if (selectedProductIndex !== -1) {
      selectedProducts[selectedProductIndex].amount++
    } else {
      selectedProducts.push({ product: product, amount: 1 })
    }
  }

  /**
   * Уменьшает количество одного блюда
   * @param productId - ID блюда
   */
  function decreaseProductCount(productId: number): void {
    const selectedProductIndex = getSelectedProductIndex(productId, selectedProducts)

    if (selectedProductIndex === -1) {
      return
    }

    if (selectedProducts[selectedProductIndex].amount > 1) {
      selectedProducts[selectedProductIndex].amount--
    } else {
      deleteProduct(productId)
    }
  }

  /**
   * Удаляет продукт
   * @param productId - ID блюда
   */
  function deleteProduct(productId: number) {
    const selectedProductIndex = getSelectedProductIndex(productId, selectedProducts)
    selectedProducts.splice(selectedProductIndex, 1)
  }

  /**
   * Ищет индекс конкретного блюда из списка выбранных блюд
   * @param id - ID искомого блюда
   * @param selectedProducts - Список выбранных блюд
   */
  function getSelectedProductIndex(id: number, selectedProducts: IProductWithAmount[]): number {
    return selectedProducts.findIndex((selectedProduct) => {
      return selectedProduct.product.id === id
    })
  }

  return {
    products,
    selectedProducts,
    selectedProductsAmount,
    increaseProductCount,
    decreaseProductCount,
    deleteProduct,
  }
}
