<template>
  <div class="col-xs-12 col-md-6 site-divide-container">
    <h1>{{ title }}</h1>
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'site-divide-container',
  props: ['title']
}
</script>

<style scoped>
  .site-divide-container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1,p {
    font-family:  'Raleway', sans-serif;
    text-shadow: 0 1px 3px rgba(0,0,0,.6);
  }

  h1 {
    font-size: 62px;
    color: white;
    font-weight: 800
  }

  a {
    font-size: 18px;
    color: #F3B741
  }

  a:hover {
    text-decoration: none;
    color: #FABE48
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 54px;
    }
  }
</style>
