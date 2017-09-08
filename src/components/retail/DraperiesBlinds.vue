<template>
  <div id="dbPage">
    <div id="dbLede">
      Draperies &amp; Blinds
    </div>
    <div class="container" id="db_atf">
      <p>
        For a more elegant design, Polar Shades offers drapery and blind installations in a wide range of fabrics and patterns. Stop by for an in-person demonstration or browse our product specifications below.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'draperies-and-blinds',
  components: {
  }
}
</script>

<style scoped>



#dbLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/d-b-main.jpg');
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

#db_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#db_atf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}


</style>
