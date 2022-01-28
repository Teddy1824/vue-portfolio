<template>
    <div class="parent">
     <div class="pt-5 p-st bg-white">
      <div data-aos="fade" data-aos-once="true" data-aos-duration="1000" class="container aos-init aos-animate">
       <div class="row align-items-center">
          <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img class="home-img" src="../assets/Bongani.jpg">
          </div>
          <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span class="home-title pgray"><h2>Welcome to my portfolio!</h2></span>
          <div>
          <p>I'm Bongani Nomangola, An aspiring Full-stack developer that is eager to learn and grow in the tech industry. </p>
          </div>
          <div class="text-center pb-4">
          <button class="btn btn-outline-secondary mx-2">
          <i class="fab fa-linkedin"></i>
          </button>
          <button class="btn btn-outline-secondary mx-2">
          <i class="fab fa-github"></i>
          </button>
          <button class="btn btn-outline-secondary mx-2">
          <i class="fab fa-codepen"></i>          
          </button>
        </div>
       </div>
      </div>
     </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
  
}
</script>

<style>
.home-img {
  width: 528px;
  height: 498px;
  max-width: 800px;
  max-height: 500px;
  margin-top: 80px;
  transform: rotateY(180deg);
  vertical-align: middle;
  border-style: none;
  border-radius: 10px;
}

p {
  font-size: larger;
}
  
</style>
