<template>
  <div class="container-fluid product-img-container">
    <div class="row">
      <div class="col-xs-12 col-md-6 img-container">
        <slot>
        </slot>
      </div>
      <div class="col-xs-12 col-md-6 flex-container">
            <img v-if="awningIcon" class="icon awning-icon" src='../../assets/awning-icon.png'  />
            <img v-if="shutterIcon" class="icon shutter-icon" src='../../assets/shutter-icon.png'  />
            <img v-if="screenIcon" class="icon screen-icon" src='../../assets/screen-icon.png'  />
            <img v-if="shadeIcon" class="icon" src='../../assets/awning-icon.png'  />
          <h3 class="text-center">{{productTitle}}</h3>
        </div>
        <p>{{productDesc}}</p>
        <div v-if="productFeature1" class="keyFeaturesLede">Key Features</div>
        <ul class="productFeaturesList">
          <li v-if="productFeature1">{{productFeature1}}</li>
          <li v-if="productFeature2">{{productFeature2}}</li>
          <li v-if="productFeature3">{{productFeature3}}</li>
          <li v-if="productFeature4">{{productFeature4}}</li>
          <li v-if="productFeature5">{{productFeature5}}</li>
        </ul>
        <div v-if="allSeasonsPiece" class="allSeasonsSectionLede">Proud business collaborator:</div>
        <div v-if="allSeasonsPiece" class="allSeasonsLogoContainer">
          <img v-if="allSeasonsPiece" src="../../assets/all-seasons.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collection-item-lander',
    props: ['productTitle', 'productDesc', 'productFeature1', 'productFeature2', 'productFeature3', 'productFeature4', 'productFeature5', 'allSeasonsPiece', 'awningIcon', 'screenIcon', 'shadeIcon', 'shutterIcon']
  }
</script>

<style scoped>
.product-img-container {
  min-height: 300px;
  margin: 0px auto
}

.awning-icon, .screen-icon, .shutter-icon {
  display: inline;
  float: left;
  padding-left: 25px;
  width: 200px;
}

.awning-icon {
  height: 155px;
  width: 30%
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
  min-height: 450px;
  text-align: left
}

.img-container {
  padding-right: 0px!important
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
