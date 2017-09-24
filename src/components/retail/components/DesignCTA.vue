<template>
  <div class="container-fluid" id="design-cta">
    <p>
      We have dedicated specialists on staff to assist with your design and general aesthetic inquiries.
    </p>
    <div class="design-cta-button-container">
      <router-link class="contact-link" v-bind:to="'/contact'"><div class="design-cta-button">Speak to a Designer</div></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'design-cta'
  }
</script>

<style scoped>
  #design-cta {
    font-family: 'avenir',sans-serif;
    font-size: 22px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom,rgba(60,60,60,0.5),rgba(90,90,90,0.8)),url('../../../assets/design-help.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    padding: 120px 0px
  }


  .design-cta-button {
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
    #design-cta {
      width: 90%;
      margin-bottom: 35px;
      line-height: 1.8em;
      font-size: 20px;
    }
  }

</style>
