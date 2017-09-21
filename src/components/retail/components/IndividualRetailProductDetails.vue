<template>
  <div class="container-fluid" id="individual-details-container">
    <div class="col-xs-12 individual-retail-product-details">
      <h3 v-bind:class="{lander: isLander}">{{productName}}</h3>
      <img v-if="shadeIcon" class="shade-icon" src="../../../assets/shade-icon.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'individual-retail-product-details',
  props: ['productName', 'isLander', 'shadeIcon']
}
</script>

<style scoped>
.individual-retail-product-details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
}

.shade-icon {
  width: 25%
}

.lander {
  background: #999;
}

h3 {
  font-size: 60px;
  margin: 0px;
  width: 100%;
  color: #f8f8f8;
  background: #999;
  font-weight: bold;
  font-family:  'Museo', sans-serif;
  padding: 60px 0px;
}

#individual-details-container {
  padding: 20px 0px 60px 0px;
  min-height: 177px;
  background: #999;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
}
</style>
