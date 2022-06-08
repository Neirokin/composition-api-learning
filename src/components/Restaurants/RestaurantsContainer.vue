<script setup lang="ts">
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'

const emit = defineEmits(['close', 'open'])
const props = defineProps({
  isShowing: { type: Boolean, default: false },
})
</script>

<template>
  <div class="restaurants" :class="{ 'restaurants--showing': isShowing }">
    <Transition mode="out-in">
      <div class="restaurants-header restaurants-header--opened" v-if="isShowing">
        <h3 class="restaurants-header__title">Restaurants</h3>
        <BootstrapIcon class="restaurants-header__close" icon="x-lg" @click="emit('close')" />
      </div>
      <div class="restaurants-header restaurants-header--closed" v-else>
        <BootstrapIcon
          class="restaurants-header__open"
          icon="chevron-right"
          @click="emit('open')"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.restaurants {
  position: fixed;
  width: 20px;
  height: 100vh;
  box-shadow: 1px -1px 5px -1px rgba(34, 60, 80, 0.6);
  background-color: #fff;
  padding: 20px;
  transition: 0.2s ease-in-out;

  &--showing {
    width: 500px;
  }

  .restaurants-header {
    display: flex;
    justify-content: space-between;

    &__title {
      font-size: 25px;
      font-weight: bold;
      margin-top: 0;
    }

    &__open,
    &__close {
      cursor: pointer;
    }
  }
}
</style>
