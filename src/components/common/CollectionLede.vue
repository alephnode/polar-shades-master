<template>
  <div class="collection-bg">
    <h2>{{collectionTitle}}</h2>
  </div>
</template>

<script>

  export default {
    name: 'collection-lede',
    props: ['collectionTitle']
  }

</script>

<style scoped>
  .collection-bg h2 {
    font-family: 'Avenir',sans-serif;
    font-size: 52px;
    font-weight: 700
  }

  @media screen and (max-width: 768px) {
    .collection-bg h2 {
      font-size: 42px
    }
  }
</style>
