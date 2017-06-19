<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
          <div class="retailIntroContainer">
            <site-divide-container class="retailIntro" title="Retail"><router-link v-bind:to="'/retail'">Learn more about our custom installations in the Las Vegas valley</router-link></site-divide-container>
          </div>
          <div class="manufacturingIntroContainer">
            <site-divide-container class="manufacturingIntro" title="Manufacturing"><router-link v-bind:to="'/business'">Explore our business and manufacturing offerings</router-link> </site-divide-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteDivideContainer from './components/SiteDivideContainer.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Polar Shades'
    }
  },
  components: {
    SiteDivideContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.retailIntro, .manufacturingIntro {
  background: #f8f8f8;
  opacity: 0.8
}

.retailIntroContainer {

}

.retailIntro::after {
  border-right: 2px solid white;
  content: "";
  background: linear-gradient(to bottom,rgba(20,20,20,0.1),rgba(25,25,25,0.7)),url('../../assets/polar_retail.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.manufacturingIntro::after {
  content: "";
  background: linear-gradient(to bottom,rgba(20,20,20,0.1),rgba(25,25,25,0.7)),url('../../assets/polar_manufacturing.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.25s;
}

@media screen and (max-width: 991px) {
  .retailIntro::after {
    border-bottom: 2px solid white;
    border-right: none
  }
}

</style>
