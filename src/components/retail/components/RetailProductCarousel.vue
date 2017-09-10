<template>
  <div class="container-fluid" id="carousel-container">
    <div class="col-xs-12 retail-product-carousel">
      <h1>Explore our Work</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'retail-product-carousel'
}
</script>

<style scoped>
/*
.par-container {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5));
  max-height: 520px;
  overflow: hidden
}*/

  .retail-product-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70vh;
  }

  #carousel-container {
    background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../../assets/retail-hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: -1;
    height: auto;
    min-height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 100px;
    position: absolute;
    top: 35%;
    width: 100%;
    color: white;
    font-weight: bold;
    font-family:  'Museo', sans-serif;
    text-shadow: 0 1px 3px rgba(0,0,0,.6);
    padding: 0px;
  }
</style>
