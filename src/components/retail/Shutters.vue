<template>
  <div id="shuttersPage">
    <div id="shuttersLede">
      Shutters
    </div>
    <div class="container" id="shutters_atf">
      <p>
        For complete insulation from the sun during those hot summer months, nothing beats full-collapse blinds. With dozens of color and material combinations to choose from, you can have a custom, comfortable experience in no time.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shutters',
  components: {
  }
}
</script>

<style scoped>


#shuttersLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/shutters-main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  height: auto;
  min-height: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: white;
  font-weight: bold;
  font-family:  'Museo', sans-serif;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
}

#shutters_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#shutters_atf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

</style>
