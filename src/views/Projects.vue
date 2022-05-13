<template>
 <h1 class="display-2">Projects</h1>
 <hr class="line">
<br/>
<div class="lds-facebook" v-if="!projects">
    <div></div>
    <div></div>
    <div></div>
</div>
 <div class="project-container" v-if="projects.length">
<div v-for="project in projects" :key="project.id" class="project">
    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
 <router-link :to="{ name: 'ProjectD', params: {id:project.id}}">
     
  <img :src="project.img" title="Read more" class="card-img-top" alt="...">
  <div class="card-body">
     <h2>{{ project.title }}</h2>
    <p class="card-text">{{ project.lang }}</p>
  </div>
  

 </router-link>
 <div class="card-body">
    <a :href="project.live" type="button" class="btn btn-outline-primary card-link" target="_blank">Live</a>
    <button type="button" class="btn btn-outline-primary" target="_blank"><a :href="project.github" class="card-link">Github</a></button>
  </div>
  </div>
</div>
 </div>

</template>

<script>
export default {
  props: ['id'],
  data() {
      return {
          projects: []
      }

  },
        mounted() {
            fetch('https://nodejs-project-testimonial-api.herokuapp.com/projects')
      .then(res => res.json())
      .then(data => {
          console.log(data)
          this.projects = data
          })
      .catch(err => console.log(err))
    // computed: {
    //     project() {
    //         return this.projects.find(project => project.id == this.$route.params.id)
    //     }
    // },
}
}
</script>

<style>

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  /* background-color: black; */
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #000;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

.project-container {
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
a {
    color: #0d6efd;
    text-decoration: none;
}

.btn {
   -webkit-transition: all 0.5s ease-in-out;
}

.btn:hover{
    -webkit-transform: scale(1.1);
    background: #fff;
    text-color: white;
}
a.card-link {
    color: black;
}

a.card-link:hover {
    color: black;
}
</style>