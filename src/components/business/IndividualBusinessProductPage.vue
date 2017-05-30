<template>
  <div>
    <individual-business-product-carousel></individual-business-product-carousel>
    <individual-business-product-details></individual-business-product-details>
  </div>
</template>

<script>
import IndividualBusinessProductCarousel from './components/IndividualBusinessProductCarousel'
import IndividualBusinessProductDetails from './components/IndividualBusinessProductDetails'

export default {
  name: 'individual-business-product-page',
  components: {
    IndividualBusinessProductCarousel,
    IndividualBusinessProductDetails
  }
}
</script>

<style scoped>
</style>
