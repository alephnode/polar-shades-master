<template>
  <div>
    <retail-product-carousel></retail-product-carousel>
    <retail-product-lander-top-description sectionTitle="Draperies &amp; Blinds"></retail-product-lander-top-description>
    <retail-product-lander-top-description sectionTitle="Awnings"></retail-product-lander-top-description>
    <retail-product-lander-top-description sectionTitle="Roller Shades"></retail-product-lander-top-description>
    <retail-product-lander-top-description sectionTitle="Shutters"></retail-product-lander-top-description>
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
