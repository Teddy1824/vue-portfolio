<template>
  <h1 class="display-2">Testimonials</h1>
<div class="text">
<div class="slider">
		<input type="radio" name="testimonial" id="t-1">
		<input type="radio" name="testimonial" id="t-2">
		<input type="radio" name="testimonial" id="t-3" checked>
		<input type="radio" name="testimonial" id="t-4">
		<input type="radio" name="testimonial" id="t-5">
		<div class="testimonials">
			<label class="items" for="t-1">
				<img src="images/Testimonial images/yusuf.jpg" alt="picture">
				<p>"Bongani is dedicated,committed and focused in whatever he puts his mind to."</p>
				<h2>- Yusuf Boltman, Colleagues</h2>
			</label>
			<label class="items" for="t-2">
				<img src="https://i.postimg.cc/J4m0rmrv/zharne.jpg" alt="picture">
				<p>"Bongani is focused and committed to his work. He delivers quality work and works well in a team."</p>
				<h2>- Zharne Desember, Colleagues</h2>
			</label>
			<label class="items" for="t-3">
				<img src="https://i.postimg.cc/pX8SZbKW/Na-aim.jpg" alt="picture">
				<p>"One word that describes Bongani is "Confidence" he enjoys solving puzzles which is needed for coding and he has good communication skills an is always eager to learn he understands the importance of deadlines."</p>
				<h2>- Na-aim Fredricks, Colleagues</h2>
			</label>
			<label class="items" for="t-4">
				<img src="https://i.postimg.cc/c4mRZFS7/kyle.png" alt="picture">
				<p>"Bongani is a very determined person knowing what he wants and how to get it done ,while also having great communication skills being liked by everyone."</p>
				<h2>- Kyle Mc Bryne, Colleagues</h2>
			</label>
			<label class="items" for="t-5">
				<img src="https://i.postimg.cc/GhVcBCdb/alex.jpg" alt="picture">
				<p>"Bongani is a focused person talent who takes pride in his work. He can achieve anything when he sets his mind to it."</p>
				<h2>-Alex Sexwale, Lecturer</h2>
			</label>
		</div>
    <br/>
		<div class="dots">
			<label for="t-1"></label>
			<label for="t-2"></label>
			<label for="t-3"></label>
			<label for="t-4"></label>
			<label for="t-5"></label>
		</div>
	</div>
</div>
<!-- 
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
</div> -->
</template>

<script>
export default {
  //   props: ['id'],
  // data() {
  //     return {
  //         testimonials: []
  //     }
  // },
  // mounted() {
  //     fetch('http://localhost:3000/testimonials')
  //     .then(res => res.json())
  //     .then(data => this.projects = data)
  //     .catch(err => console.log(err.message))
  // },
}
</script>

<style>
.slider {
  width: 100%;
}
.slider input {
  display: none;
}
.testimonials {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 480px;
  perspective: 1000px;
  overflow: hidden;
}
.testimonials .items {
  top: 0;
  position: absolute;
  box-sizing: border-box;
  background-color: #f5f5f5;
  padding: 30px;
  width: 450px;
  text-align: center;
  transition: transform 0.4s;
  -webkit-transform-style: preserve-3d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  user-select: none;
  cursor: pointer;
}
.testimonials .items img {
  width: 155px;
  border-radius: 5%;
  border: 1px solid #3b344d;
}
.testimonials .items p {
  color: rgb(63, 56, 56);
}
.testimonials .items h2 {
  font-size: 14px;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dots label {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #413b52;
  margin: 7px;
  transition: transform 0.2s, color 0.2s;
}

/* First */
#t-1:checked ~ .dots label[for="t-1"] {
  transform: scale(2);
  background-color: #3b344d;
}
#t-1:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-1:checked ~ .testimonials label[for="t-1"] {
  z-index: 4;
}
#t-1:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  z-index: 3;
}
#t-1:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
  z-index: 2;
}
#t-1:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
  z-index: 1;
}
#t-1:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
}

/* Second */
#t-2:checked ~ .dots label[for="t-1"] {
  transform: scale(1.5);
}
#t-2:checked ~ .dots label[for="t-2"] {
  transform: scale(2);
  background-color: #3b344d;
}
#t-2:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-2:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
}
#t-2:checked ~ .testimonials label[for="t-2"] {
  z-index: 3;
}
#t-2:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  z-index: 2;
}
#t-2:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
  z-index: 1;
}
#t-2:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
}

/* Third */
#t-3:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-3:checked ~ .dots label[for="t-3"] {
  transform: scale(2);
  background-color: #3b344d;
}
#t-3:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-3:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
}
#t-3:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
}
#t-3:checked ~ .testimonials label[for="t-3"] {
  z-index: 3;
}
#t-3:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  z-index: 2;
}
#t-3:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
}

/* Fourth */
#t-4:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-4:checked ~ .dots label[for="t-4"] {
  transform: scale(2);
  background-color: #3b344d;
}
#t-4:checked ~ .dots label[for="t-5"] {
  transform: scale(1.5);
}
#t-4:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
}
#t-4:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
}
#t-4:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
  z-index: 2;
}
#t-4:checked ~ .testimonials label[for="t-4"] {
  z-index: 3;
}
#t-4:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
}

/* Fifth */
#t-5:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-5:checked ~ .dots label[for="t-5"] {
  transform: scale(2);
  background-color: #3b344d;
}
#t-5:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
}
#t-5:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
  z-index: 1;
}
#t-5:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
  z-index: 2;
}
#t-5:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
  z-index: 3;
}
#t-5:checked ~ .testimonials label[for="t-5"] {
  z-index: 4;
}

</style>