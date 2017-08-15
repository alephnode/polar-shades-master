<template>
  <div id="rollerShadesPage">
    <div id="rollerShadesLede">
      Roller Shades
    </div>
    <div class="container" id="rollershades_atf">
      <p>
        Take advantage of cutting-edge technology and manage your shades in style. From scores of colors to hundreds of customization options, roller shades are our most ambitious offering.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'roller-shades',
  components: {
  }
}
</script>

<style scoped>

#rollerShadesLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/roller-shades.jpg');
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

#rollershades_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#rollershades_atf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

</style>
