<template>
  <div id="awningsPage">
    <div id="awningsLede">
      Awnings
    </div>
    <div class="container" id="awnings_atf">
      <p>
        Maintaining a cool space is more than window covering - creating a shaded environment is also essential. Employ efficient solutions to reduce your energy bill by up to 40 percent - in style all the while.
      </p>
    </div>
    <collection-lede id="awningCollection" collectionTitle="Our Collection"></collection-lede>
    <collection-item productTitle="G150"
                     productDesc="With a commercial-grade frame and wrapped front bar, the G150 is one of our most durable luxury awning solutions. Additional features include drop forge components and a Somfy Sunea CMO motor."
                     productFeature1="Powder-coated frame in several styles"
                     productFeature2="Welded acrylic seams for increased strength and performance"
                     productFeature3="Optional drop screen for added seclusion"
                     productFeature4="Patented articulating shoulders for advanced manueverability">
      <img class="img img-responsive" :src="image1" />
    </collection-item>
    <collection-item productTitle="7700"
                     productDesc="The 7700 series retractable patio awnings are a cost-effective quality product with all aluminum construction."
                     productFeature1="Powder-coated frame in several styles"
                     productFeature2="Welded acrylic seams for increased strength and performance"
                     productFeature3="Optional drop screen for added seclusion"
                     productFeature4="7-Pin adjustable shoulder"
                     productFeature5="6 valence styles">
      <img class="img img-responsive" :src="image2" />
    </collection-item>
    <awningCta></awningCta>
  </div>
</template>

<script>
import AwningCTA from './components/AwningCTA'
import CollectionItem from '../common/CollectionItem'
import CollectionLede from '../common/CollectionLede'
import imageG150 from '../../assets/awning7.jpg'
import image7700 from '../../assets/awning8.jpg'

export default {
  name: 'awnings',
  components: {
    awningCta: AwningCTA,
    CollectionItem,
    CollectionLede
  },
  data () {
    return {
      image1: imageG150,
      image2: image7700
    }
  }
}
</script>

<style scoped>

#awningsLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/awning.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  height: auto;
  min-height: 450px;
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

#awnings_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#awnings_atf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

#awningCollection {
  padding: 60px 0px;
  margin: 10px 0px 70px 0px;
  color: #999;
  background: #f7f7f7;
}

</style>
