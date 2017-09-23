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
  padding: 60px 0px 10px 0px;
  background: transparent;
}

h3 {
  font-size: 60px;
  margin: 0px;
  width: 100%;
  color: #f8f8f8;
  font-weight: bold;
  font-family:  'Museo', sans-serif;
}

#individual-details-container {
  padding: 20px 0px 60px 0px;
  min-height: 177px;
  background: linear-gradient(to bottom,rgba(100,100,100,0.2),rgba(100,100,100,0.5)),url('../../../assets/roller_retail_landers.jpg');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  border-top: 1px solid #f8f8f8;
  border-bottom: 1px solid #f8f8f8;
}
</style>
