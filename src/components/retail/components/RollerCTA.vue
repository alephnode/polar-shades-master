<template>
  <div class="container-fluid" id="roller-cta">
    <p>
      Stop by our showroom to view live demos of our various motorized and manual offerings.
    </p>
    <div class="roller-cta-button-container">
      <router-link class="contact-link" v-bind:to="'/contact'"><div class="roller-cta-button">Let's Schedule My Visit</div></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'roller-cta'
  }
</script>

<style scoped>
  #roller-cta {
    font-family: 'avenir',sans-serif;
    font-size: 22px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom,rgba(60,60,60,0.5),rgba(90,90,90,0.8)),url('../../../assets/ps_factory.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding: 60px 0px
  }


  .roller-cta-button {
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
    #roller-cta {
      font-size: 20px;
    }

    p {
      margin-bottom: 35px;
      line-height: 1.8em;
      width: 90%;
    }
  }

</style>
