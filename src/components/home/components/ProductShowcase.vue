<template>
  <div class="col-xs-12 product-showcase">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'product-showcase',
  props: ['title']
}
</script>

<style scoped>
  .product-showcase {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    height: 500px;
  }

  h1 {
    margin-top: -10px
  }
</style>
