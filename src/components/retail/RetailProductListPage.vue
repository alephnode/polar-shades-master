<template>
  <div class="container-fluid" id="list-page-container">
    <retail-product-carousel></retail-product-carousel>
      <h1>Retail Product List with Tiles</h1>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
        <div class="col-xs-12 col-md-4" id="product-container">
          <router-link v-bind:to="'/retail/products/product'">
            <div class="product">
              Product
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RetailProductCarousel from './components/RetailProductCarousel'

export default {
  name: 'retail-product-list-page',
  components: {
    RetailProductCarousel
  }
}
</script>

<style scoped>

  h1 {
    padding: 30px;
  }

  #list-page-container {
    border-bottom: 1px solid #ccc;
    padding: 30px 0px 60px 0px;
  }

  .product {
    width: 95%;
    height: 240px;
    background: #eee;
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>
