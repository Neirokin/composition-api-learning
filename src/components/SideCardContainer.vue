<script setup lang="ts">
const props = defineProps({
  isShowing: { type: Boolean, default: true },
  position: { type: String, default: 'right' },
})
</script>

<template>
  <transition>
    <div class="side-card-container" :class="[`side-card-container--${position}`]" v-if="isShowing">
      <slot />
    </div>
  </transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: 0.18s ease-in-out;
}

.v-leave-to,
.v-enter-from {
  transform: translateX(100%);
}
.v-leave-from,
.v-enter-to {
  transform: translateX(0);
}

.side-card-container {
  position: fixed;
  top: 0;

  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
}
</style>
