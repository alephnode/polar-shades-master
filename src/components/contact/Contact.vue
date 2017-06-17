<template>
  <div id="contactUsPage">
    <div id="contactPageLede">
      Get in Touch
    </div>
    <div class="container" id="contact">
      <p>
        Need a quote? You've come to the right place. From general questions to dimension or style breakdowns, we're here to help. Please provide your information below and a talented member of our staff will get back to you as quickly as possible!
      </p>
    </div>
    <div class="container">

    <form class="form-horizontal" action=" " method="post"  id="contact_form">
      <fieldset>

      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-2 col-md-offset-2 control-label">First Name</label>
        <div class="col-md-6 inputGroupContainer">
        <div class="input-group">
        <input  name="first_name" placeholder="First Name" class="form-control"  type="text">
          </div>
        </div>
      </div>

      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-2 col-md-offset-2 control-label" >Last Name</label>
          <div class="col-md-6 inputGroupContainer">
          <div class="input-group">
        <input name="last_name" placeholder="Last Name" class="form-control"  type="text">
          </div>
        </div>
      </div>

      <!-- Text input-->
             <div class="form-group">
        <label class="col-md-2 col-md-offset-2 control-label">Email</label>
          <div class="col-md-6 inputGroupContainer">
          <div class="input-group">
        <input name="email" placeholder="E-Mail Address" class="form-control"  type="text">
          </div>
        </div>
      </div>


      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-2 col-md-offset-2 control-label">Phone</label>
          <div class="col-md-6 inputGroupContainer">
          <div class="input-group">
        <input name="phone" placeholder="(845)555-1212" class="form-control" type="text">
          </div>
        </div>
      </div>

      <!-- Text area -->

      <div class="form-group">
        <label class="col-md-2 col-md-offset-2 control-label">Description</label>
          <div class="col-md-6 inputGroupContainer">
          <div class="input-group">
              	<textarea class="form-control" name="comment" placeholder="Project Description"></textarea>
        </div>
        </div>
      </div>

      <!-- Button -->
      <div class="form-group">
        <div class="col-md-10">
          <button type="submit" class="pull-right btn" >Send <span class="glyphicon glyphicon-send"></span></button>
        </div>
      </div>
      </fieldset>
    </form>
</div>
    </div><!-- /.container -->
</template>

<script>
export default {
  name: 'contact'
}
</script>
<!-- styling for the component -->
<style>
#contactPageLede {
  height: auto;
  min-height: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom,rgba(60,60,60,0.1),rgba(90,90,90,0.5)),url('../../assets/ps_contact.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 100px;
  color: white;
  font-family:  'Raleway', sans-serif;
  text-shadow: 0 1px 3px rgba(0,0,0,.6);
}

#contactUsPage .btn {
  padding: 10px 40px;
  color: white;
  font-size: 18px;
  background: #ffb900;
  margin: 25px auto 80px auto;
}

#contact {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  border-bottom: none
}

#contactUsPage .input-group input {
  height: 45px;
  border-radius: 5px;
  box-shadow: none;
}

#contactUsPage .input-group textarea {
  height: 90px;
  box-shadow: none;
  border-radius: 5px
}

#contactUsPage .form-group label {
  font-size: 20px;
  font-weight: 500;
}

.input-group {
  width: 100%;
}

#contact p {
  font-size: 22px;
  line-height: 2.1em;
  text-align: left;
  margin: 0px auto 35px auto;
  width: 80%;
}

@media screen and (max-width: 768px) {
  #contact p {
    width: 100%;
    font-size: 18px
  }
}

</style>
