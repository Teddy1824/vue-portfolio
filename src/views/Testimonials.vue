<template>
  <h1 class="display-2">Testimonials</h1>
  <hr class="line">
<div class="text">
       <div class="testimonial-container testimonial-inner" >
                <div class="row d-flex justify-content-center">
                    <div class="test col-md-3 col-lg-6 style-6" v-for="testimonial of testimonials" :key="testimonial">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">“{{ testimonial.text }}”</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" :src="testimonial.img"></div>
                                <div class="link-name d-flex justify-content-center">{{ testimonial.name }}</div>
                                <div class="link-position d-flex justify-content-center">{{ testimonial.occupation }}</div>
                            </div>
                        </div>
                    </div>
                </div>
       </div>
</div>
</template>

<script>
export default {
  data() {
      return {
          testimonials: null
      }
  },
  mounted() {
      fetch('https://nodejs-project-testimonial-api.herokuapp.com/testimonials')
      .then(res => res.json())
      .then(data => this.testimonials = data)
      .catch(err => console.log(err.message))
  },
}
</script>

<style>

.home-testimonial {
    background-color: #231834;
    height: 380px
}

.home-testimonial-bottom {
    background-color: #f8f8f8;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin-top: 20px;
    margin-bottom: 0px;
    position: relative;
    height: 130px;
    top: 190px
}

.home-testimonial h3 {
    color: var(--orange);
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase
}

.home-testimonial h2 {
    color: white;
    font-size: 28px;
    font-weight: 700
}

.col-lg-6 {
    flex: 0 0 auto;
    width: 45%;
}

.testimonial-inner {
    position: relative;
}

.testimonial-pos {
    position: relative;
    top: 24px
}

.testimonial-inner .tour-desc {
border-radius: 5px;
    padding: 40px;
    border: groove;
    gap: 30px;
}

.color-grey-3 {
    font-family: "Montserrat", Sans-serif;
    font-size: 14px;
    color: #6c83a2
}

.testimonial-inner img.tm-people {
    width: 60px;
    height: 60px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
    max-width: none
}

.link-name {
    font-family: "Montserrat", Sans-serif;
    font-size: 18px;
    color: #6c83a2
}

.link-position {
    font-family: "Montserrat", Sans-serif;
    font-size: 12px;
    color: #6c83a2
}

.color-grey-3 {
    font-family: "Montserrat", Sans-serif;
    font-size: 19px;
    color: #6c83a2;
}
</style>