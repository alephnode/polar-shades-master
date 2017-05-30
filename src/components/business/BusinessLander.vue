<template>
  <div>
    <business-product-carousel><router-link v-bind:to="'/business/products'">Click to view more in this category</router-link></business-product-carousel>
    <business-product-lander-top-description></business-product-lander-top-description>
    <business-product-lander-top-description></business-product-lander-top-description>
    <business-product-lander-top-description></business-product-lander-top-description>
  </div>
</template>

<script>
import BusinessProductCarousel from './components/BusinessProductCarousel'
import BusinessProductLanderTopDescription from './components/BusinessProductLanderTopDescription'

export default {
  name: 'business-lander',
  components: {
    BusinessProductCarousel,
    BusinessProductLanderTopDescription
  }
}
</script>

<style scoped>
</style>
