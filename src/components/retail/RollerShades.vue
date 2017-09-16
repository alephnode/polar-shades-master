<template>
  <div id="rollerShadesPage">
    <div id="rollerShadesLede">
      Roller Shades
    </div>
    <div class="container" id="rollershades_atf">
      <p>
        Take advantage of cutting-edge technology and manage your shades in style. From scores of colors to hundreds of customization options, roller shades are our most ambitious offering.
      </p>
    </div>
    <collection-lede id="rsCollection" collectionTitle="Our Collection"></collection-lede>
    <collection-item productTitle="7700"
                     productDesc="The 7700 series retractable patio awnings are a cost-effective quality product with all aluminum construction."
                     productFeature1="Powder-coated frame in several styles"
                     productFeature2="Welded acrylic seams for increased strength and performance"
                     productFeature3="Optional drop screen for added seclusion"
                     productFeature4="7-Pin adjustable shoulder"
                     productFeature5="6 valence styles"></collection-item>
    <collection-item productTitle="7700"
                    productDesc="The 7700 series retractable patio awnings are a cost-effective quality product with all aluminum construction."
                    productFeature1="Powder-coated frame in several styles"
                    productFeature2="Welded acrylic seams for increased strength and performance"
                    productFeature3="Optional drop screen for added seclusion"
                    productFeature4="7-Pin adjustable shoulder"
                    productFeature5="6 valence styles"></collection-item>
    <collection-item productTitle="7700"
                    productDesc="The 7700 series retractable patio awnings are a cost-effective quality product with all aluminum construction."
                    productFeature1="Powder-coated frame in several styles"
                    productFeature2="Welded acrylic seams for increased strength and performance"
                    productFeature3="Optional drop screen for added seclusion"
                    productFeature4="7-Pin adjustable shoulder"
                    productFeature5="6 valence styles"></collection-item>
                    <rollerCta></rollerCta>
  </div>
</template>
<script>
import RollerCTA from './components/RollerCTA'
import CollectionLede from '../common/CollectionLede'
import CollectionItem from '../common/CollectionItem'

export default {
  name: 'roller-shades',
  components: {
    rollerCta: RollerCTA,
    CollectionLede,
    CollectionItem
  }
}
</script>

<style scoped>

#rsCollection {
  padding: 60px 0px;
  margin: 10px 0px 70px 0px;
  color: #999;
  background: #f7f7f7;
}

#rollerShadesLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/roller-shades.jpg');
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

#rollershades_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#rollershades_atf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

</style>
