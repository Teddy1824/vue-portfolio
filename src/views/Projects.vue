<template>
 <h1 class="display-2">Projects</h1>
 <hr class="line">
<br/>
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
    <a :href="project.live" type="button" class="btn btn-outline-primary card-link">Live</a>
    <button type="button" class="btn btn-outline-primary"><a :href="project.github" class="card-link">Github</a></button>
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
    background: #2e833c;
    text-color: white;
}
a.card-link {
    color: black;
}

a.card-link:hover {
    color: white;
}
</style>