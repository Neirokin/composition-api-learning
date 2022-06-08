<script setup lang="ts">
import RestaurantCard from '@/components/Restaurants/RestaurantCard.vue'
import CardsList from '@/components/CardsList.vue'
import { useRestaurants } from '@/composables/restaurants'

const { restaurants, redirectToProducts } = useRestaurants()
</script>

<template>
  <div>
    <CardsList>
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        v-bind="restaurant"
        @click="redirectToProducts(restaurant.id)"
      />
    </CardsList>
  </div>
</template>

<style scoped lang="scss"></style>
