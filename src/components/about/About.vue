<template>
  <div id="aboutPage">
    <div id="aboutPageLede">
      About Us
    </div>
    <div class="container" id="about_atf">
      <p>
        Polar Shades Sun Control corporate office and manufacturing division is located in Henderson, Nevada, just 15 minutes from the “Strip” in Las Vegas.
      </p>
    </div>
    <div class="container-fluid">
      <iframe id="mapAbout"
        width="100%"
        height="400"
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyABHI8ueljiYNIibg58zrJKnz9zrp5cq1M&q=520+East+Sunset+Road,Henderson+NV" allowfullscreen>
      </iframe>
    </div>
    <div class="container" id="about_btf">
      <p>
        A family owned business started in 1995 by its current owner, Steve Mevius, Polar Shades Sun Control manufactures interior and exterior window covering products. What once was an operation for products installed locally in Las Vegas, has now grown into a major manufacturing company providing their products all over the US, Canada, and Europe. What started as a backyard hobby making solar screens has turned into a passion of creating the best quality products with the best warranty and the best customer service in the industry.
      </p>

      <p>
        When Steve started the company, he saw that there was a basic need for sun control that just wasn’t being met in the Las Vegas valley. People were constantly looking for ways to control the excessive heat and glare and a good quality solution was nowhere in sight. Because of this, Steve decided to do his own research on sun control products and set out to find the best quality material available to design products that would allow people to take control of their sun control issues. What he found was that the products he needed didn’t exist or meet his strict expectations. He then began the process of creating, engineering, and drawing the products that would meet his high standards and those of Polar Shades customers. Steve met with aluminum extruders, injection mold, sun control specialty fabrics, and motor control companies so he could realize his dream of quality retractable sun control products.
      </p>

      <p>
        In 1995 with everything now in place, Steve took an early retirement package from his employer, American Airlines, and along with his father, Art Mevius, started Polar Shades Sun Control. With just the two of them they set out to offer their new products to the people of Las Vegas. In over 20 years, they now have over 50 employees and have expanded their facility to over 21,000 square feet. Polar Shades invested in computerized fabric cutting tables, RF and Impulse fabric welding machines, and inspection hoists that enable Polar Shades to manufacture the “Best Built, Best Backed” line of interior and exterior shades in the nation. Polar Shades now supplies well over 1,000 independent dealers nationwide, sharing their exclusive products. Steve even started a second company called All Seasons Retractable Screens, a retractable screen door company (now run by Art Mevius) that manufactures and supplies a nationwide dealer network.
      </p>

      <p>
        Since its inception, Polar Shades Sun Control has added exterior retractable shades, interior retractable shades, and an electrical division to its product line. The motto for the company, as Steve has always said, is “Quality you can trust with service you can count on!” With that basic phrase he has positioned Polar Shades to be one of the nation’s leaders in Sun Control Products. Honesty and integrity is what our business is based on.
      </p>

      <p>
        Whatever your needs are, large or small, Polar Shades Sun Control should be your choice for “Covering everything under the sun”. Please give us a call and our friendly staff will be happy to help you with whatever you need. Come visit our showroom which is open to the public 6 days a week, and see for yourself the “Best Built, Best Backed” shades in the industry.
      </p>
    </div>
    <div class="container-fluid" id="mission">
      <div class="missionTitle">
        Our Mission
      </div>
      <div class="missionSection">
        <p>
          "At Polar Shades Sun Control, our commitment to our customers is to provide the finest quality product with the best warranty at the very best price.
        </p>
        <p>
          We deliver superior customer service second to none, with 'Honesty and Integrity' - the principles our company is founded on."
        </p>
        <div class="signature">
          Steve Mevius, President<br/>
          Polar Shades, Inc.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>
<!-- styling for the component -->
<style>

#aboutPageLede {
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/polar.jpg');
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
  font-family:  'Raleway', sans-serif;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
}

#about_btf, #about_atf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-bottom: none;
}

#about_btf p, #about_atf p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

#mission p, #mission .signature {
  color: white;
  font-size: 20px;
  line-height: 2em;
  font-style: italic;
  text-align: left;
  margin: 10px auto 0px auto;
  width: 75%;
  text-shadow: 0 2px 4px rgba(0,0,0,.8);
}

#mission .signature {
  margin-top: 40px;
  font-style: normal;
}

#mission {
  padding: 60px 0px;
  background: linear-gradient(to bottom,rgba(60,60,60,0.3),rgba(0,0,0,0.9)),url('../../assets/ps_factory.jpg');
  background-size: cover;
  height: auto;
  min-height: 500px;
  background-repeat: no-repeat
}

.missionTitle {
  text-align: left;
  width: 80%;
  margin: 0px auto;
  font-size: 64px;
  color: #ffb900;
  font-family:  'Raleway', sans-serif;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
}

.container-fluid {
  padding-left: 0px!important;
  padding-right: 0px!important;
}

#mapAbout {
  pointer-events: none
}

@media screen and (max-width: 768px) {
  #about_btf p, #about_atf p {
    width: 100%;
    font-size: 18px
  }
}

</style>
