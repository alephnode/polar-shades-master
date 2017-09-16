<template>
  <div id="shuttersPage">
    <div id="shuttersLede">
      Blinds, Shutters<br/>
      &amp; Draperies
    </div>
    <div class="container" id="shutters_atf">
      <p>
        For complete insulation from the sun during those hot summer months, nothing beats full-collapse blinds. With dozens of color and material combinations to choose from, you can have a custom, comfortable experience in no time.
      </p>
    </div>
    <collection-lede id="blindsCollection" collectionTitle="Blinds"></collection-lede>
    <collection-item productTitle="7700"
                     productDesc="The 7700 series retractable patio awnings are a cost-effective quality product with all aluminum construction."
                     productFeature1="Powder-coated frame in several styles"
                     productFeature2="Welded acrylic seams for increased strength and performance"
                     productFeature3="Optional drop screen for added seclusion"
                     productFeature4="7-Pin adjustable shoulder"
                     productFeature5="6 valence styles"></collection-item>
    <collection-lede id="shuttersCollection" collectionTitle="Shutters"></collection-lede>
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
    <collection-lede id="draperiesCollection" collectionTitle="Draperies"></collection-lede>
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
    <partnersCTA></partnersCTA>
  </div>
</template>
<script>
import PartnersCTA from './components/PartnersCTA'
import CollectionLede from '../common/CollectionLede'
import CollectionItem from '../common/CollectionItem'

export default {
  name: 'shutters',
  components: {
    partnersCTA: PartnersCTA,
    CollectionLede,
    CollectionItem
  }
}
</script>

<style scoped>


#shuttersLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/shutters-main.jpg');
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

#shutters_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#shutters_atf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

#blindsCollection, #shuttersCollection, #draperiesCollection {
  margin: 10px 0px 70px 0px;
}

#blindsCollection {
  background: linear-gradient(to bottom,rgba(60,60,60,0.3),rgba(90,90,90,0.7)),url('../../assets/blinds.jpg');
  background-size: cover;
  padding: 120px 0px;
}

#draperiesCollection {
  background: linear-gradient(to bottom,rgba(60,60,60,0.3),rgba(90,90,90,0.7)),url('../../assets/d-b-main.jpg');
  background-position: -0% 30%;
  padding: 160px 0px;
}

#shuttersCollection {
  background: linear-gradient(to bottom,rgba(60,60,60,0.5),rgba(90,90,90,0.8)),url('../../assets/shutters.jpg');
  background-size: cover;
  padding: 120px 0px;
}

#blindsCollection, #draperiesCollection, #shuttersCollection {
  color: white;
  font-size: 68pt;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
}

</style>
