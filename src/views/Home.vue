<template>
    <div class="parent">
     <div class="pt-5 p-st">
      <div data-aos="fade" data-aos-once="true" data-aos-duration="1000" class="container aos-init aos-animate">
       <div class="row align-items-center justify-content-center" id="slide">
          <div class="col-lg-6 text-center">
          <img class="home-img" src="../assets/Bongani.jpg">
          </div>
          <div class="col-lg-6 pt-5">
          <span class="home-title pgray"><h2 class="trying animate__animated animate__zoomIn">Welcome to my portfolio!</h2></span>
          <div>
          <p>I'm Bongani Nomangola, An aspiring Full-stack developer.</p>
          </div>
          <div class="text-center pb-4">
          <button class="btn btn-outline-secondary mx-2"><a href="https://www.linkedin.com/in/bongani-nomangola-78b92a223/" class="link" target="_blank">
          <i class="fab fa-linkedin"></i>
          </a>
          </button>
          <button class="btn btn-outline-secondary mx-2"><a href="https://github.com/Teddy1824" class="link" target="_blank">
          <i class="fab fa-github"></i>
          </a>
          </button>
          <button class="btn btn-outline-secondary mx-2"><a href="https://codepen.io/teddy1824" class="link" target="_blank">
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
.trying {
    font-family: 'DM Sans', sans-serif;
}

.parent{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.home-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin-top: 80px;
  transform: rotateY(180deg);
  vertical-align: middle;
  border-style: none;
  border-radius: 10px;
}

.col-lg-6.pt-5 {
    width: 100%;
    max-width: 50%;
    text-align: center;
}

h2.animate__animated.animate__zoomIn {
    font-family: 'DM Sans', sans-serif;
}

p {
  font-size: larger;
}
  
.link {
  color: gray;
}

.link:hover {
  color: gray;
}

#slide {
    --bs-gutter-x: 8.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-.5 * var(--bs-gutter-x));
    margin-left: calc(-.5 * var(--bs-gutter-x));
    margin-top: 20px;
}
</style>
