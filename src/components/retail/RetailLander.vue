<template>
  <div>
    <retail-product-carousel></retail-product-carousel>
    <div class="container" id="retailLanderAtf">
      <p>
        Whether you're looking for a complete home automation integration with motored shades and remote access or sectional blinds and draperies, we have you covered. Our exhaustive inventory and affordable prices will satisfy your dream install without breaking the bank.
      </p>
    </div>
    <retail-product-lander-top-description class="offerDesc" sectionTitle="What We Offer"></retail-product-lander-top-description>
    <collection-item style="color: #666" productTitle="Awnings">
      <img style="min-height: 380px" class="img img-responsive" src='../../assets/awningyellow.jpg' />
    </collection-item>
    <collection-item-right-align style="color: #666" productTitle="Blinds, Shutters &amp; Draperies" awningIcon="true">
      <img class="img img-responsive" src='../../assets/shutter_lander.jpg' />
    </collection-item-right-align>
    <individual-retail-product-details productName="Roller Shades"></individual-retail-product-details>
    <collection-item style="color: #666" productTitle="Retractable Screen Doors">
      <img class="img img-responsive" src='../../assets/screen-main.jpg' />
    </collection-item>
  </div>
</template>

<script>
import RetailProductCarousel from './components/RetailProductCarousel'
import IndividualRetailProductDetails from './components/IndividualRetailProductDetails'
import CollectionItem from '../common/CollectionItem'
import CollectionItemRightAlign from '../common/CollectionItemRightAlign'
import RetailProductLanderTopDescription from './components/RetailProductLanderTopDescription'

export default {
  name: 'retail-lander',
  components: {
    RetailProductCarousel,
    RetailProductLanderTopDescription,
    IndividualRetailProductDetails,
    CollectionItem,
    CollectionItemRightAlign
  }
}
</script>

<style scoped>

.offerDesc {
  background-size: cover;
  background-position: 0% 10%;
  background-repeat: no-repeat;
}

#retailLanderAtf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#retailLanderAtf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 65px auto;
  width: 80%;
}


</style>
