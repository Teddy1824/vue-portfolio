<template>
    <div class="parent">
     <div class="pt-5 p-st bg-white">
      <div data-aos="fade" data-aos-once="true" data-aos-duration="1000" class="container aos-init aos-animate">
       <div class="row align-items-center">
          <div class="col-lg-6 text-center">
          <img class="home-img" src="../assets/Bongani.jpg">
          </div>
          <div class="col-lg-6 pt-5">
          <span class="home-title pgray"><h2 class="animate__animated animate__zoomIn">Welcome to my portfolio!</h2></span>
          <div>
          <p>I'm Bongani Nomangola, An aspiring Full-stack developer that is eager to learn and grow in the tech industry. </p>
          </div>
          <div class="text-center pb-4">
          <button class="btn btn-outline-secondary mx-2"><a href="https://www.linkedin.com/in/bongani-nomangola-78b92a223/" class="link">
          <i class="fab fa-linkedin"></i>
          </a>
          </button>
          <button class="btn btn-outline-secondary mx-2"><a href="https://github.com/Teddy1824" class="link">
          <i class="fab fa-github"></i>
          </a>
          </button>
          <button class="btn btn-outline-secondary mx-2"><a href="https://codepen.io/teddy1824" class="link">
          <i class="fab fa-codepen"></i>          
          </a>
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

.parent{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
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
  
.link {
  color: gray;
}

.link:hover {
  color: white;
}

.row {
  --bs-gutter-x: 8.5rem;
}

</style>
