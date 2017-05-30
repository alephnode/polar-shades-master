<template>
  <div>
    <individual-retail-product-carousel></individual-retail-product-carousel>
    <individual-retail-product-details></individual-retail-product-details>
  </div>
</template>

<script>
import IndividualRetailProductCarousel from './components/IndividualRetailProductCarousel'
import IndividualRetailProductDetails from './components/IndividualRetailProductDetails'

export default {
  name: 'individual-retail-product-page',
  components: {
    IndividualRetailProductCarousel,
    IndividualRetailProductDetails
  }
}
</script>

<style scoped>
</style>
