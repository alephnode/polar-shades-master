<template>
  <div class="container-fluid" id="awning-cta">
    <p>
      Want to see more styles? We have over 50 textures and 20 finishes on display at our office. Schedule a tour of our showroom today!
    </p>
    <div class="awning-cta-button-container">
      <router-link class="contact-link" v-bind:to="'/contact'"><div class="awning-cta-button">Let's Schedule My Visit</div></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'awning-cta'
  }
</script>

<style scoped>
  #awning-cta {
    font-family: 'avenir',sans-serif;
    font-size: 22px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom,rgba(60,60,60,0.5),rgba(90,90,90,0.8)),url('../../../assets/ps_manufacturing.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding: 60px 0px
  }


  .awning-cta-button {
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

  @media screen and (max-width: 768px) {
    p {
      width: 90%;
      margin-bottom: 35px;
      line-height: 1.8em;
      font-size: 20px;
    }
  }

</style>
