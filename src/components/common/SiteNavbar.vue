<template>
<nav class="navbar navbar-default" id="ps-nav">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link v-bind:to="'/'" class="navbar-brand">
           <img src="../../assets/ps_logo_site.png" />
      </router-link>
    </div>
    <ul class="nav navbar-nav">
      <li v-show="retailRoute"><router-link v-bind:to="'/retail'">Retail Work</router-link></li>
      <li v-show="retailRoute"><router-link v-bind:to="'retail/products'">Retail Category 1</router-link></li>
      <li v-show="retailRoute"><router-link v-bind:to="'/retail/products'">Retail Category 2</router-link></li>
      <li v-show="businessRoute"><router-link v-bind:to="'/business'">Business Work</router-link></li>
      <li v-show="businessRoute"><router-link v-bind:to="'/business/products'">Business Category 1</router-link></li>
      <li v-show="businessRoute"><router-link v-bind:to="'/business/products'">Business Category 2</router-link></li>
      <li><router-link v-bind:to="'/about'">About</router-link></li>
      <li><router-link v-bind:to="'/contact'">Contact</router-link></li>
    </ul>

    <div class="pull-right search-icon-section">
      <div class="quoteText">Request a Quote</div> <i class="glyphicon glyphicon-search"></i>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: 'ps-navbar',
  computed: {
    retailRoute () {
      let route = this.$route.path.split('/')[1]
      return route.includes('retail')
    },
    businessRoute () {
      let route = this.$route.path.split('/')[1]
      return route.includes('business')
    }
  }
}

</script>

<style scoped>

@font-face {
    font-family: "Museo";
    src: url("../../assets/fonts/MuseoSans_500-webfont.woff") format('woff');
}

#ps-nav {
  margin-bottom: 0px;
  height: 100px;
  padding-top: 5px;
  font-weight: 300;
  color: black;
  font-size: 17px;
  background: white;
  font-family: 'Museo';
}

#ps-nav a {
  color: #555
}

.search-icon-section {
  padding-top: 33px;
  padding-right: 10px;
  color: #777
}

img {
  width: 170px
}

.quoteText {
  display: inline;
  margin-right: 20px;
}

.navbar-brand {
  padding-top: 3px
}

.navbar-nav {
  padding-top: 20px
}


</style>
