<template>
  <div class="container-fluid" id="description-container">
    <div class="col-xs-12 business-product-description">
      <h1>Business Product Description</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'business-product-lander-top-description'
}
</script>

<style scoped>
  .business-product-description {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }

  #description-container {
    padding: 0px;
  }

  h1 {
    margin-top: -10px
  }
</style>
