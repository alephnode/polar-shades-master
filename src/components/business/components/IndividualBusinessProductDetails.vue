<template>
  <div class="container-fluid" id="individual-details-container">
    <div class="col-xs-12 individual-business-product-details">
      <h1>Individual Business Product Details</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'individual-business-product-details'
}
</script>

<style scoped>
.individual-business-product-details {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

#individual-details-container {
  padding: 0px;
}

h1 {
  margin-top: -10px
}
</style>
