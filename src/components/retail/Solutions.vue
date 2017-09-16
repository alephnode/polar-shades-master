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
    <collection-lede id="solutionsCollection" collectionTitle="Retractable Screen Doors"></collection-lede>
    <partnersCTA></partnersCTA>
  </div>
</template>
<script>
import PartnersCTA from './components/PartnersCTA'
import CollectionLede from '../common/CollectionLede'
import CollectionItem from '../common/CollectionItem'

export default {
  name: 'solutions',
  components: {
    partnersCTA: PartnersCTA,
    CollectionLede,
    CollectionItem
  }
}
</script>

<style scoped>


#solutionsLede {
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

#solutions_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#solutions_atf p {
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

</style>
