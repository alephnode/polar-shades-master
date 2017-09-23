<template>
  <div>
    <retail-product-carousel></retail-product-carousel>
    <div class="container" id="retailLanderAtf">
      <p>
        Whether you're looking for a complete home automation integration with motored shades and remote access or sectional blinds and draperies, we have you covered. Our exhaustive inventory and affordable prices will satisfy your dream install without breaking the bank.
      </p>
    </div>
    <individual-retail-product-details productName="What We Offer" style="background: rgb(64, 89, 167); padding: 120px"></individual-retail-product-details>
    <collection-item-lander awningIcon="true" style="color: #999; padding-left: 0px; background: #f7f7f7;
    min-height: 445px;" productTitle="Awnings">
      <img style="min-height: 475px; margin-right: 0px; width: 100%" class="img img-responsive" src='../../assets/awningyellow.jpg' />
    </collection-item-lander>
    <collection-item-lander-right-align shutterIcon="true" style="color: #999; padding: 0px; background: #f7f7f7;
    min-height: 420px;" productTitle="Blinds, Shutters &amp; Draperies">
      <img class="img img-responsive" src='../../assets/shutter_lander.jpg' />
    </collection-item-lander-right-align>
    <individual-retail-product-details productName="Roller Shades" isLander="true" shadeIcon="true"></individual-retail-product-details>
    <collection-item-lander screenIcon="true" style="color: #999; padding-left: 0px; background: #f7f7f7;
    min-height: 420px;" productTitle="Retractable Screen Doors">
      <img class="img img-responsive" style="min-height: 500px" src='../../assets/screen-main.jpg' />
    </collection-item-lander>
    <designCta></designCta>
  </div>
</template>

<script>
import RetailProductCarousel from './components/RetailProductCarousel'
import IndividualRetailProductDetails from './components/IndividualRetailProductDetails'
import CollectionItemLander from '../common/CollectionItemLander'
import CollectionItemLanderRightAlign from '../common/CollectionItemLanderRightAlign'
import RetailProductLanderTopDescription from './components/RetailProductLanderTopDescription'
import DesignCTA from './components/DesignCTA'

export default {
  name: 'retail-lander',
  components: {
    designCta: DesignCTA,
    RetailProductCarousel,
    RetailProductLanderTopDescription,
    IndividualRetailProductDetails,
    CollectionItemLander,
    CollectionItemLanderRightAlign
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
