<script setup lang="ts"></script>

<template>
  <div class="badge">
    <slot>Badge</slot>
  </div>
</template>

<style scoped lang="scss">
.badge {
  width: fit-content;
  border-radius: 15px;
  background-color: #f67825;
  color: white;
  font-size: 12px;
  font-weight: bolder;
  padding: 2px 10px;
}
</style>
