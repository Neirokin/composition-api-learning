<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import ProductList from '@/components/ProductList.vue'
import ProductCard from '@/components/ProductCard.vue'
import CartContainer from '@/components/Cart/CartContainer.vue'
import CartButton from '@/components/Cart/CartButton.vue'
import { productsApi } from '@/api/products'
import type { IProduct } from '@/typescript/interfaces'

interface IProductWithAmount {
  product: IProduct
  amount: number
}

// Флаг для показа корзины
let cardShowing = ref(false)

// Запрос списка блюд
let products = ref<IProduct[]>([])
productsApi.getProductsMock().then((resp) => {
  products.value = resp
})

// Подсчёт количества блюд для кнопки открытия корзины
let selectedProducts = reactive<IProductWithAmount[]>([])
let selectedProductsAmount = computed(() => {
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
</script>

<template>
  <div class="products">
    <ProductList>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :image="product.image"
        :restaurant-chain="product.restaurantChain"
        @plus="increaseProductCount(product)"
        @minus="decreaseProductCount(product.id)"
      />
    </ProductList>

    <CartButton
      class="cart-button"
      :product-count="selectedProductsAmount"
      @click="cardShowing = true"
    />
    <CartContainer
      :is-showing="cardShowing"
      :cart-items="selectedProducts"
      @close="cardShowing = false"
      @plus="increaseProductCount"
      @minus="decreaseProductCount"
      @delete-product="deleteProduct"
    />
  </div>
</template>

<style scoped lang="scss">
.products {
  .cart-button {
    position: fixed;
    top: 25px;
    right: 20px;
  }
}
</style>
