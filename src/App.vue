<template>
  <div id="app">
    <ps-navbar></ps-navbar>
      <router-view></router-view>
    <ps-footer></ps-footer>
  </div>
</template>

<script>

import SiteNavbar from './components/common/SiteNavbar.vue'
import SiteFooter from './components/common/SiteFooter.vue'

export default {
  name: 'app',
  components: {
    'ps-footer': SiteFooter,
    'ps-navbar': SiteNavbar
  }
}
</script>
<!-- styling for the component -->
<style>

html, body {
margin: 0px;
margin-top: -8px;
padding: 0px;
overflow-x: hidden
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
</style>
