// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import RetailLander from './components/retail/RetailLander'
import RollerShades from './components/retail/RollerShades'
import Awnings from './components/retail/Awnings'
import Shutters from './components/retail/Shutters'
import DraperiesBlinds from './components/retail/DraperiesBlinds'
import BusinessLander from './components/business/BusinessLander'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

//tell vue to use the router
Vue.use(VueRouter)


//define your routes
const routes = [
//define the root url of the application.
{ path: '/', component: Home },
{ path: '/about', component: About },
{ path: '/contact', component: Contact },
{ path: '/retail', component: RetailLander },
{ path: '/retail/roller-shades', component: RollerShades },
{ path: '/retail/awnings', component: Awnings },
{ path: '/retail/shutters', component: Shutters },
{ path: '/retail/draperies-and-blinds', component: DraperiesBlinds }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
