<script setup lang="ts">
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
import BadgeItem from '@/components/BadgeItem.vue'

const props = defineProps<{ productCount?: number }>()
</script>

<template>
  <div class="cart-button">
    <BootstrapIcon class="cart-button__cart" icon="cart" flip-h />
    <BadgeItem class="cart-button__badge" v-if="productCount">
      <span class="cart-button__badge-value">{{ productCount }}</span>
    </BadgeItem>
  </div>
</template>

<style scoped lang="scss">
.cart-button {
  cursor: pointer;

  &__cart {
    width: 55px;
    height: 55px;
    color: #a1a1a1;
  }
  &__badge {
    transform: translateY(-250%) translateX(-25%);
  }
  &__badge-value {
    font-size: 16px;
  }
}
</style>
