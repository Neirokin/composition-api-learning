<template>
  <div class="product-list">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
}
</style>
