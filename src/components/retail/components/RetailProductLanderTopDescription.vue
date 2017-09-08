<template>
  <div class="container-fluid" id="description-container">
    <div class="col-xs-12 retail-product-description">
      <h1>{{ sectionTitle }}</h1>
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
