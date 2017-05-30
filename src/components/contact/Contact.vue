<template>
  <div id="contactUsPage">
    <div id="contactPageLede">
      Contact Us
    </div>
    <div id="contact">
      This is the contact page
    </div>
    <div class="container">

    <form class="form-horizontal" action=" " method="post"  id="contact_form">
      <fieldset>

      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-4 control-label">First Name</label>
        <div class="col-md-4 inputGroupContainer">
        <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input  name="first_name" placeholder="First Name" class="form-control"  type="text">
          </div>
        </div>
      </div>

      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-4 control-label" >Last Name</label>
          <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input name="last_name" placeholder="Last Name" class="form-control"  type="text">
          </div>
        </div>
      </div>

      <!-- Text input-->
             <div class="form-group">
        <label class="col-md-4 control-label">E-Mail</label>
          <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input name="email" placeholder="E-Mail Address" class="form-control"  type="text">
          </div>
        </div>
      </div>


      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-4 control-label">Phone #</label>
          <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
        <input name="phone" placeholder="(845)555-1212" class="form-control" type="text">
          </div>
        </div>
      </div>

      <!-- Text area -->

      <div class="form-group">
        <label class="col-md-4 control-label">Project Description</label>
          <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
              	<textarea class="form-control" name="comment" placeholder="Project Description"></textarea>
        </div>
        </div>
      </div>

      <!-- Button -->
      <div class="form-group">
        <label class="col-md-4 control-label"></label>
        <div class="col-md-4">
          <button type="submit" class="btn btn-warning" >Send <span class="glyphicon glyphicon-send"></span></button>
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
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
}

#contact {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
