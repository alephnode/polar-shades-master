<template>
  <div class="container-fluid" id="individual-carousel-container">
    <div class="col-xs-12 individual-retail-product-carousel">
      <h1>Individual Retail Product Carousel</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'individual-retail-product-carousel'
}
</script>

<style scoped>
  .individual-retail-product-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  #individual-carousel-container {
    padding: 0px;
  }

  h1 {
    margin-top: -10px
  }
</style>
