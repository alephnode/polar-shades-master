<template>
  <div class="container-fluid" id="carousel-container">
    <div class="col-xs-12 business-product-carousel">
      <h1>Business Product Carousel</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'business-product-carousel'
}
</script>

<style scoped>
  .business-product-carousel {
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  #carousel-container {
    padding: 0px;
  }

  h1 {
    margin-top: -10px
  }
</style>
