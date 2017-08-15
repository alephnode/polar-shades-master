<template>
<nav class="navbar navbar-default" id="ps-nav">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link v-bind:to="'/'" class="navbar-brand">
           <img src="../../assets/ps_logo_site.png" />
      </router-link>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link v-bind:to="'/about'">Why Polar Shades?</router-link></li>
      <li v-show="!retailRoute"><router-link v-bind:to="'/retail'">Retail</router-link></li>
      <li v-show="retailRoute"><router-link v-bind:to="'retail/products'">Roller Shades</router-link></li>
      <li v-show="retailRoute"><router-link v-bind:to="'/retail/products'">Awnings</router-link></li>
      <li v-show="retailRoute"><router-link v-bind:to="'/retail/products'">Shutters</router-link></li>
      <li v-show="retailRoute"><router-link v-bind:to="'/retail/products'">Shutters</router-link></li>
      <li v-show="retailRoute"><router-link v-bind:to="'/retail/products'">Draperies &amp; Blinds</router-link></li>
      <li v-show="!retailRoute"><a href="//www.polarshade.com">Business</a></li>
    </ul>

    <div class="pull-right search-icon-section">
      <router-link v-bind:to="'/contact'"><div class="quoteText">I Want a Quote! <i class="glyphicon glyphicon-pencil"></i></div></router-link>
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
  border: none!important
}

#ps-nav a {
  color: #555;
  transition: all 0.25s ease;
}

#ps-nav a:hover {
  color: #ffb900;
}

.search-icon-section {
  padding-top: 36px;
  padding-right: 10px;
  color: #777
}

img {
  width: 170px
}

.quoteText {
  display: inline;
  margin-right: 20px;
  padding: 10px 20px;
  background: #71D58E;
  color: white;

  border-radius: 4px;
}

#ps-nav .search-icon-section a:hover, #ps-nav .search-icon-section a:active, #ps-nav .search-icon-section a:visited {
  text-decoration: none!important;
  color: none
}

#ps-nav .quoteText:hover {
  background: #4CbA6C;
}

#ps-nav .navbar-brand {
  padding-top: 3px;
  margin-left: 10px
}

.navbar-nav {
  padding-top: 20px
}

.glyphicon-pencil {
  font-size: 14px;
  padding-left: 5px
}

</style>
