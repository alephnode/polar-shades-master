<template>
  <div class="container-fluid" id="individual-carousel-container">
    <div class="col-xs-12 individual-business-product-carousel">
      <h1>Individual Business Product Carousel</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'individual-business-product-carousel'
}
</script>

<style scoped>
  .individual-business-product-carousel {
    border-bottom: 1px solid #ccc;
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
