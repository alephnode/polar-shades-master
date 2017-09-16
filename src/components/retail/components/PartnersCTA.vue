<template>
  <div class="container-fluid" id="partners-cta">
    <p>
      Check out our partners who rock!
    </p>
  </div>
</template>

<script>
  export default {
    name: 'partners-cta'
  }
</script>

<style scoped>
  #partners-cta {
    font-family: 'avenir',sans-serif;
    font-size: 22px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom,rgba(60,60,60,0.3),rgba(90,90,90,0.6)),url('../../../assets/ps_factory.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding: 60px 0px
  }


  .partners-cta-button {
    padding: 15px 30px;
    background: #71D58E;
    color: white;
    border-radius: 4px;
    font-weight: 700
  }

  .contact-link:hover {
    text-decoration: none;
  }

  p {
    width: 70%;
    margin-bottom: 25px;
    line-height: 2.2em;
    color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,.6);
    font-weight: 400
  }
</style>
