<script setup lang="ts">
import { ref } from 'vue'

interface ProductCardProps {
  id: number
  image: string
  restaurantChain: string
  title: string
}

const emit = defineEmits(['plus', 'minus'])
const props = defineProps<ProductCardProps>()

// let amount = ref(0)

/**
 * В данной реализации эмитит событие на добавление конкретного блюда
 */
function increaseAmount(): void {
  // amount.value++
  emit('plus')
}

/**
 * В данной реализации эмитит событие на уменьшение конкретного блюда
 */
function decreaseAmount(): void {
  // if (amount.value <= 0) {
  //   return
  // }

  // amount.value--
  emit('minus')
}
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
    <div class="product-controls">
      <button class="product-controls__button" @click="increaseAmount">+</button>
      <!--      <span class="product-controls__amount" v-if="amount">{{ amount }}</span>-->
      <button class="product-controls__button" @click="decreaseAmount">−</button>
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

  //&:hover {
  //  transform: scale(105%);
  //  cursor: pointer;
  //}

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

    //&__amount {
    //  margin-right: 15px;
    //  font-weight: bolder;
    //}
    &__button {
      @include plus-minus-button();
    }
  }
}
</style>
