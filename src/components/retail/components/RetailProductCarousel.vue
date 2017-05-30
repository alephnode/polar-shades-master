<template>
  <div class="container-fluid" id="carousel-container">
    <div class="col-xs-12 retail-product-carousel">
      <h1>Retail Product Carousel</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'retail-product-carousel'
}
</script>

<style scoped>
  .retail-product-carousel {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70vh;
  }

  #carousel-container {
    padding: 0px;
  }

  h1 {
    margin-top: -10px
  }
</style>
