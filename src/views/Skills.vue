<template>
  <h1 class="display-2">Skills</h1>
        <hr class="line">
  <div class="p-st bg-white" id="skills">
    <div class="container py-4">
      <div class="text-center">
        </div>
        <br>
        <div class="row">
          <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4">
            <div class="bg-div">
              <i class="fa fa-code" id="icons"></i>
              </div>
              <div class="title2 pt-2">Language</div>
              <hr class="line2">
              <span class="title3">Javascript</span>
              </div>
              <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4">
                <div class="bg-div">
                  <i class="fa fa-cubes" id="icons"></i>
                  </div>
                  <div class="title2 pt-2">Front-end</div>
                  <hr class="line2">
                  <span class="title3">HTML5, CSS3, Bootstrap3, json</span>
                  </div>
                  <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4">
                    <div class="bg-div">
                      <i class="fas fa-laptop-code" id="icons"></i>
                      </div>
                      <div class="title2 pt-2">Web Technologies</div>
                      <hr class="line2">
                      <span class="title3">Vue, Node</span>
                      </div>
                      <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4;">
                        <div class="bg-div">
                          <i class="fa fa-database" id="icons"></i>
                          </div>
                          <div class="title2 pt-2">Databases</div>
                          <hr class="line2">
                          <span class="title3">MySQL, SQL Server</span>
                          </div>
                          <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4;">
                         <div class="bg-div">
                        <i class="fas fa-tools" id="icons"></i>
                       </div>
                     <div class="title2 pt-2">Operating systems &amp; tools</div>
                   <hr class="line2">
                  <span class="title3">Ubuntu, Windows</span>
                </div>
              <div class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4">
            <div class="bg-div">
           <i class="fa fa-pencil-square-o" id="icons"></i>
          </div>
         <div class="title2 pt-2">Design</div>
        <hr class="line2">
       <span class="title3">Gimp</span>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
  overflow-x: hidden;
}

.line {
  display: -webkit-inline-box;
  width: 500px;
}

hr.line2 {
    display: -webkit-inline-box;
    width: 350px;
}

#skills {
  font-size: x-large;
}

#icons {
  font-size: x-large;
}

.col-xl-4.col-bg-4.col-md-4.col-sm-12.text-center.pb-5.px-4\; {
    flex-wrap: wrap;
    display: inline-grid;
    justify-content: space-evenly;
}

.col-xl-4.col-bg-4.col-md-4.col-sm-12.text-center.pb-5.px-4 {
    flex-wrap: wrap;
    display: inline-grid;
    justify-content: space-evenly;
}
</style>