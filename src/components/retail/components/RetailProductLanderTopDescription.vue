<template>
  <div class="container-fluid" id="description-container">
    <div class="col-xs-12 retail-product-description">
      <h2>{{ sectionTitle }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'retail-product-lander-top-description', props: ['sectionTitle']
}
</script>

<style scoped>
  .retail-product-description {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 175px 0px
  }

  #description-container {
    padding: 0px;
  }

  h2 {
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
</style>
