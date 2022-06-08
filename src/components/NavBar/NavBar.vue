<script setup lang="ts">
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
import { computed } from 'vue'
import router from '@/router'

const showBackButton = computed(() => {
  return router.currentRoute.value.path !== '/'
})
</script>

<template>
  <div class="nav-bar">
    <div class="logo-container">
      <img
        class="logo-container__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png"
        alt=""
      />
    </div>
    <div class="controls">
      <BootstrapIcon
        class="controls__back"
        icon="arrow-left"
        v-if="showBackButton"
        @click="$router.push('/')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  min-height: 40px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  padding: 20px;

  .logo-container {
    &__logo {
      width: 100px;
      height: 100%;
    }
  }

  .controls {
    display: flex;
    align-items: center;

    &__back {
      cursor: pointer;
      margin-left: 25px;
      width: 25px;
      height: 25px;
    }
  }
}
</style>
