<script setup lang="ts">
import SideCardContainer from '@/components/SideCardContainer.vue'
import CartItem from '@/components/Cart/CartItem.vue'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'

const emit = defineEmits(['close', 'plus', 'minus', 'delete-product'])
const props = defineProps({
  isShowing: { type: Boolean, default: false },
  cartItems: { type: Array, default: () => [] },
})
</script>

<template>
  <SideCardContainer :is-showing="isShowing">
    <div class="cart">
      <div class="cart-header">
        <h3 class="cart-header__title">Cart</h3>
        <BootstrapIcon class="cart-header__close" icon="x-lg" @click="emit('close')" />
      </div>
      <div class="cart-body">
        <div class="products-list">
          <CartItem
            class="products-list__item"
            v-for="{ product, amount } in cartItems"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :image="product.image"
            :amount="amount"
            @plus="emit('plus', product)"
            @minus="emit('minus', product.id)"
            @delete-product="emit('delete-product', product.id)"
          />
        </div>
      </div>
    </div>
  </SideCardContainer>
</template>

<style scoped lang="scss">
.cart {
  width: 500px;
  height: 100vh;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
  background-color: #fff;
  padding: 20px;

  .cart-header {
    display: flex;
    justify-content: space-between;

    &__title {
      font-size: 25px;
      font-weight: bold;
      margin-top: 0;
    }

    &__close {
      cursor: pointer;
    }
  }

  .cart-body {
    .products-list {
      &__item:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
