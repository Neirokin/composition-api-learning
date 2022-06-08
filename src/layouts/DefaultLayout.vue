<script setup lang="ts">
import NavBar from '@/components/NavBar/NavBar.vue'
</script>

<template>
  <div class="default-layout">
    <NavBar clas="nav-bar" />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  padding-top: 40px;
}
</style>
