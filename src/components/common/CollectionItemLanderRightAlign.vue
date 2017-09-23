<template>
  <div class="container-fluid product-img-container" style="padding-right: 0px">
      <div class="col-xs-12 col-md-6 flex-container">
              <img v-if="awningIcon" class="icon awning-icon" src='../../assets/awning-icon.png'  />
              <img v-if="shutterIcon" class="icon shutter-icon" src='../../assets/shutter-icon.png'  />
              <img v-if="screenIcon" class="icon screen-icon" src='../../assets/screen-icon.png'  />
              <img v-if="shadeIcon" class="icon" src='../../assets/awning-icon.png'  />
            <h3 class="text-center">{{productTitle}}</h3>
      </div>
      <div class="col-xs-12 col-md-6" style="padding: 0px">
        <slot>
        </slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'collection-item-lander-right-align',
    props: ['productTitle', 'productDesc', 'productFeature1', 'productFeature2', 'productFeature3', 'productFeature4', 'productFeature5', 'allSeasonsPiece', 'awningIcon', 'screenIcon', 'shadeIcon', 'shutterIcon']
  }
</script>

<style scoped>
.product-img-container {
  min-height: 300px;
  margin: 0px auto
}

.awning-icon, .screen-icon, .shutter-icon {
  width: 40%;
}

.allSeasonsLogoContainer img {
  margin-top: 25px;
  padding-left: 28pt;
  width: 60%
}

.allSeasonsSectionLede {
  margin-top: 25px;
}

h3 {
  padding-left: 30px;
  font-weight: 900;
  font-size: 52px;
  font-family: 'Avenir',sans-serif;
  letter-spacing: 1.5px;
  margin: 20px 0px;
}

.flex-container {
  font-family:  'Avenir', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 465px;
  text-align: left
}

.productFeaturesList {
  text-align: left;
  padding-left: 45px;
  line-height: 2em
}

.keyFeaturesLede, .allSeasonsSectionLede {
  font-weight: 900;
  padding-left: 30px;
  letter-spacing: 1px;
  font-size: 15px;
  color: #000;
  text-transform: uppercase
}

.keyFeaturesLede {
  margin: 10px 0px;
}

p {
  padding-left: 30px;
  line-height: 2.2em;
  font-size: 18px;
  margin: 25px 0px
}

</style>
