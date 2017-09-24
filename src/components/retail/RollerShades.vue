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
    <collection-lede id="rsIntCollection" collectionTitle="Interior Shades"></collection-lede>
    <collection-item productTitle="Motorized Interior Shade"
                    productDesc="Technology for residential, commercial, hospitality and healthcare window applications is constantly progressing. Movements that seem natural to us, such as closing a blind manually, are today considered out dated. Polar Shades is a leader in window covering motorization and automation options. By coordinating motors and electronic controls, Polar Shades provides its customers with a choice of reliable and practical solutions."
                    productFeature1="Available in width of 28″ up to 168″ measured bracket to bracket with coupled shade applications and angled couplers for single motor operation of larger expanses."
                    productFeature2="Available in drops of 12″ up to 192″ with total drop measured from top of bracket to bottom of hem bar"
                    productFeature3="Black out track and 4″ or 5″ fascia in standard colors: white, tan, black, bronze or anodized aluminum"
                    productFeature4="Powder-coated steel brackets available in standard colors: white, tan, black, bronze or anodized aluminum"
                    productFeature5="Welded (not sewn) fabric seams in horizontal application for solar fabrics and either horizontal or vertical application for acrylic fabrics">
      <img class="img img-responsive" :src="image2" />
    </collection-item>
    <collection-item productTitle="Manual Interior Shade"
                     productDesc="Interior Manual Shades are designed with a clutch system that is operated by pulling a continuous loop bead chain to effortlessly open and close the shade. Simply pull down on one side of the chain to raise the shade and pull down on the opposite side of the chain to lower the shade. Polar Shades’ multiple clutch sizes ensure that any size shade can be lifted with minimal effort. Interior manual shades are available with an optional 3 inch or 4 inch fascia in 5 standard colors as well as custom colors at an up charge. A curved cassette box that can be fabric wrapped for a softer look provides a beautiful designer look."
                     productFeature1="Available in widths of 24″ to 144″, measured from end of bracket to end of bracket"
                     productFeature2="Available in drops up to 120″, measured from top of the bracket to bottom of the weight bar"
                     productFeature3="Fabric wrapped fascia or fabric wrapped curved cassette box options"
                     productFeature4="Spring assist option for easier to lift large shades"
                     productFeature5="Powder-coated steel brackets available in white, tan, bronze, black &amp; anodized">
      <img class="img img-responsive" :src="image3" />
    </collection-item>
    <collection-item productTitle="Duo Shade"
                     productDesc="Our Duo Shade provides the highest level of functionality enabling the mounting of a sheer or sun control shade and a privacy or black out shade all in one single housing with optimal operation via remote control or wireless wall switch. The Duo Shade is mounted on uniquely designed brackets which hold two shades while giving the appearance of one mounted shade. "
                     productFeature1="Select Duo Shade is a dual-roller shade system; One roller tube holds a blackout fabric for room darkening for instance, while the other holds an open weave fabric. The roller tube with black out fabric can be combined with black out tracks for a darker effect."
                     productFeature2="Drops are available from 12″ to 120″ with the total drop measured from the top of the bracket to the bottom of the hem bar"
                     productFeature3="Brackets are powder-coated steel and available in standard colors: anodized, white, tan, and bronze"
                     productFeature4="Available with black out track and 7″ fascia in standard colors: anodized, white, tan, and bronze"
                     productFeature5="Limited Lifetime Warranty">
      <img class="img img-responsive" :src="image4" />
    </collection-item>
    <collection-lede id="rsExtCollection" collectionTitle="Exterior Shades"></collection-lede>
    <collection-item productTitle="Elite Patio Roll Shade"
                    productDesc="Polar Shades’ Elite Patio Roll Shade is offered with a 4.5″ Elite Cassette, a curved Freedom Hood or as a standard open roll configuration. The Elite Patio Roll Shade is available in a motorized or manual configuration. Its sleek design will cover spans up to 14 feet in width and heights up to 12 feet in length."
                    productFeature1="Wind, Sun sensor options available"
                    productFeature2="Interior wall mount and remote controls"
                    productFeature3="Track guided"
                    productFeature4="Welded fabric edges"
                    productFeature5="Soffit Mount Brackets">
      <img class="img img-responsive" :src="image1" />
    </collection-item>
    <collection-item productTitle="Titan Patio Roll Shade"
                    productDesc="Polar Shades’ Exterior Select Patio Roll Shade is offered with a 5.5″ Titan Cassette, a curved Patriot Hood or as a standard open roll configuration. The Patio Roll Shade is available in a motorized or manual configuration with a sleek design that covers spans up to 20 feet in width and heights up to 16 feet in length."
                    productFeature1="Wind, Sun sensor options available"
                    productFeature2="Interior wall mount and remote controls"
                    productFeature3="Home automation integration"
                    productFeature4="Welded fabric edges"
                    productFeature5="Manual with Crank or Motorized">
      <img class="img img-responsive" :src="image5" />
    </collection-item>
                    <rollerCta></rollerCta>
  </div>
</template>
<script>
import RollerCTA from './components/RollerCTA'
import CollectionLede from '../common/CollectionLede'
import CollectionItem from '../common/CollectionItem'
import imageExteriorMotor from '../../assets/exterior_shade5.jpg'
import imageInteriorManual from '../../assets/interior_manual.jpg'
import imageInteriorMotor from '../../assets/interior_shade8.jpg'
import imageInteriorDuo from '../../assets/interior_duoshade.jpg'
import imageExteriorTitan from '../../assets/titan_shade.jpg'
// import image7700 from '../../assets/awning8.jpg'

export default {
  name: 'roller-shades',
  components: {
    rollerCta: RollerCTA,
    CollectionLede,
    CollectionItem
  },
  data () {
    return {
      image1: imageExteriorMotor,
      image2: imageInteriorManual,
      image3: imageInteriorMotor,
      image4: imageInteriorDuo,
      image5: imageExteriorTitan
    }
  }
}
</script>

<style scoped>

#rsIntCollection, #rsExtCollection {
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

@media screen and (max-width: 768px) {
  #rollerShadesLede {
    height: 300px;
    font-size: 52px;
  }
  #rollershades_atf p {
    width: 95%
  }
}

</style>
