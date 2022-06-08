<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<style lang="scss">
@import '@/assets/base.css';
</style>
