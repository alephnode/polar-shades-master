<template>
  <div id="solutionsPage">
    <div id="solutionsLede">
      Other Solutions
    </div>
    <div class="container" id="solutions_atf">
      <p>
        For complete insulation from the sun during those hot summer months, nothing beats full-collapse blinds. With dozens of color and material combinations to choose from, you can have a custom, comfortable experience in no time.
      </p>
    </div>
    <collection-lede id="bsdCollection" collectionTitle="Blinds, Shutters &amp; Draperies"></collection-lede>
    <div class="container partnerBSD">
    <div class="col-xs-12 square-container text-center">
      <div class="square-bsd"></div>
      <div class="square-bsd"></div>
      <div class="square-bsd"></div>
    </div>
    <div class="col-xs-12 text-center">
        We proudly partner with the following excellent shade and fabric manufacturers:
    </div>
    <div class="col-xs-12 text-center logo-container">
      <img src="../../assets/alta.png" />
      <img src="../../assets/somfy.png" />
      <img src="../../assets/countryblinds.png" />
    </div>
    </div>
    <collection-lede id="solutionsCollection" collectionTitle="Retractable Screen Doors"></collection-lede>
    <collection-item productTitle="Retractable Screen Doors"
                     productDesc="We utilize a unique, adaptable system, allowing us to create screen doors without compromising the personalized style of your home. Thanks to our innovative design, we’re able to fit screens on single doors and large openings, such as double French doors."
                     productFeature1="Single- or double-door options"
                     productFeature2="Several frame finishes to choose"
                     productFeature3="Optional drop screen for added seclusion"
                     allSeasonsPiece=true>
      <img class="img img-responsive" :src="image1" />
    </collection-item>
  </div>
</template>
<script>
import CollectionLede from '../common/CollectionLede'
import CollectionItem from '../common/CollectionItem'
import ScreenItemImage from '../../assets/screen_item.jpg'

export default {
  name: 'solutions',
  components: {
    CollectionLede,
    CollectionItem
  },
  data () {
    return {
      image1: ScreenItemImage
    }
  }
}
</script>

<style scoped>

.square-bsd {
  width: 200px;
  height: 200px;
  background: blue;
  margin: 20px
}

.logo-container, .square-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-bottom: 40px
}

.square-bsd:first-child {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/blinds.jpg');
  background-size: cover;
}

.square-bsd:nth-child(2) {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/shutters.jpg');
  background-size: cover;
}

.square-bsd:last-child {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/d-b-main.jpg');
  background-size: cover;
}

.logo-container img {
  width: 33%;
  padding: 20px
}

.logo-container img:first-child {
  margin-top: 25px
}

.logo-container img:nth-child(2) {
  margin-left: 20px
}

#solutionsLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/shutters-main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  height: auto;
  height: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: white;
  font-weight: bold;
  font-family:  'Museo', sans-serif;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
}

#solutions_atf, .partnerBSD {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#solutions_atf p, .partnerBSD {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

#bsdCollection, #solutionsCollection {
  margin: 10px 0px 70px 0px;
}

#bsdCollection {
  background: linear-gradient(to bottom,rgba(60,60,60,0.3),rgba(90,90,90,0.7)),url('../../assets/d-b-main.jpg');
  padding: 180px 0px;
  background-position: 0% 30%
}

#solutionsCollection {
  background: linear-gradient(to bottom,rgba(60,60,60,0.3),rgba(90,90,90,0.7)),url('../../assets/screens_lander.jpg');
  background-size: cover;
  padding: 200px 0px;
  background-position: 50% 85%;
}

#bsdCollection, #solutionsCollection {
  color: white;
  font-size: 68pt;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
}

@media screen and (max-width: 768px) {
  #solutionsLede {
    height: 300px;
    font-size: 52px;
  }

  #solutions_atf p, .partnerBSD {
    width: 95%
  }

  #bsdCollection, #solutionsCollection {
    padding: 90px 0px
  }

  .logo-container img {
    width: 80%;
    padding: 0px;
    margin-bottom: 40px
  }

  .logo-container img:last-child {
    margin-bottom: 0px
  }

  .logo-container img:first-child {
    margin-top: 50px
  }

}

</style>
