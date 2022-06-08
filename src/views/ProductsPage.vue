<script setup lang="ts">
import CardsList from '@/components/CardsList.vue'
import ProductCard from '@/components/ProductCard.vue'
import CartContainer from '@/components/Cart/CartContainer.vue'
import CartButton from '@/components/Cart/CartButton.vue'
import { useProduct } from '@/composables/product'
import { useCard } from '@//composables/card'

const {
  products,
  selectedProducts,
  selectedProductsAmount,
  increaseProductCount,
  decreaseProductCount,
  deleteProduct,
} = useProduct()

const cartShowingController = useCard()
</script>

<template>
  <div class="products">
    <!--    <RestaurantsContainer-->
    <!--      class="products__restaurants"-->
    <!--      :is-showing="isRestaurantsShowing"-->
    <!--      @open="isRestaurantsShowing = true"-->
    <!--      @close="isRestaurantsShowing = false"-->
    <!--    />-->

    <CardsList class="products__list">
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
    </CardsList>

    <div class="products__cart">
      <CartButton
        class="cart-button"
        :product-count="selectedProductsAmount"
        @click="cartShowingController.toggleShowing(true)"
      />
      <CartContainer
        :is-showing="cartShowingController.isShowing.value"
        :cart-items="selectedProducts"
        @close="cartShowingController.toggleShowing(false)"
        @plus="increaseProductCount"
        @minus="decreaseProductCount"
        @delete-product="deleteProduct"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.products {
  &__list {
    margin-left: 40px;
  }

  .cart-button {
    position: fixed;
    top: 15px;
    right: 20px;
  }
}
</style>
