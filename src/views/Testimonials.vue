<template>
  <h1>Testimonials</h1>

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" v-if="testimonial.length">
  <div v-for="testimonial in testimonials" :key="testimonial.id" class="project">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1542137722061-efd1cbdf156c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ testimonials.name }}</h5>
        <p>{{ testimonials.occupation }}</p>
      </div>
    </div>
    
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ['id'],
  data() {
      return {
          testimonials: []
      }
  },
  mounted() {
      fetch('http://localhost:3000/testimonials')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
}
</script>

<style>



</style>