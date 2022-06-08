<script setup lang="ts">
import { defineProps } from 'vue'

interface IRestaurantProps {
  id: number
  image: string
  title: string
}

const props = defineProps<IRestaurantProps>()
</script>

<template>
  <div class="product-card">
    <div class="product-preview">
      <img class="product-preview__image" :src="image" alt="Product preview" />
    </div>
    <hr class="product-card__divider" />
    <div class="product-description">
      <p class="product-description__title">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins.scss';

.product-card {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  width: 400px;
  transition: 0.07s ease-in-out;
  padding: 10px 5px 20px 5px;

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }

  &__divider {
    width: 90%;
  }

  .product-preview {
    height: 231px;
    display: flex;
    justify-content: center;
  }

  .product-description {
    padding: 10px;
  }

  .product-controls {
    display: flex;
    justify-content: space-between;
    padding: 0 70px;

    &__button {
      @include plus-minus-button();
    }
  }
}
</style>
