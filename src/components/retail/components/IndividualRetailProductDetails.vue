<template>
  <div class="container-fluid" id="individual-details-container">
    <div class="col-xs-12 individual-retail-product-details">
      <h3>{{productName}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'individual-retail-product-details',
  props: ['productName']
}
</script>

<style scoped>
.individual-retail-product-details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

h3 {
  margin-top: -10px;
  font-size: 60px;
  position: absolute;
  top: 35%;
  width: 100%;
  color: #999;
  background: #f7f7f7;
  font-weight: bold;
  font-family:  'Museo', sans-serif;
  padding: 60px 0px;
}

#individual-details-container {
  padding: 0px;
}
</style>
