<template>
  <div>
    <retail-product-carousel><router-link v-bind:to="'/retail/products'">Click to view more in this category</router-link></retail-product-carousel>
    <retail-product-lander-top-description></retail-product-lander-top-description>
    <retail-product-lander-top-description></retail-product-lander-top-description>
    <retail-product-lander-top-description></retail-product-lander-top-description>
  </div>
</template>

<script>
import RetailProductCarousel from './components/RetailProductCarousel'
import RetailProductLanderTopDescription from './components/RetailProductLanderTopDescription'

export default {
  name: 'retail-lander',
  components: {
    RetailProductCarousel,
    RetailProductLanderTopDescription
  }
}
</script>

<style scoped>
</style>
