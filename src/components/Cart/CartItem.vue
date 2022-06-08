<script setup lang="ts">
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'

interface ICartItemProps {
  id: number
  image: string
  title: string
  amount: number
}

const emit = defineEmits(['plus', 'minus', 'delete-product'])
const props = defineProps<ICartItemProps>()
</script>

<template>
  <div class="cart-item">
    <div class="product-preview">
      <img class="product-preview__img" :src="image" alt="Product" />
    </div>
    <div class="product-description">
      <p class="product-description__title">{{ title }}</p>
    </div>
    <div class="product-controls">
      <span class="product-controls__amount">{{ amount }}</span>
      <button class="product-controls__button" @click="emit('plus')">+</button>
      <button class="product-controls__button" @click="emit('minus')">-</button>
      <BootstrapIcon class="product-controls__delete" icon="x" @click="emit('delete-product')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins.scss';

.cart-item {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 60px;
  //border: 1px solid black;
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  padding: 0 10px;

  .product-preview {
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .product-description {
    margin-left: 20px;
  }

  .product-controls {
    display: flex;
    flex-wrap: nowrap;
    margin-left: auto;

    &__amount {
      margin-right: 15px;
      font-weight: bolder;
    }
    &__button {
      @include plus-minus-button();
      padding: 1px 8px;
    }
    &__button:nth-child(3) {
      margin-left: 10px;
    }
    &__delete {
      cursor: pointer;
      width: 20px;
      height: 20px;
      position: absolute;
      top: -2px;
      right: -10px;
      color: #ff571a;
    }
  }
}
</style>
