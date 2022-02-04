<template>
 <h1 class="display-2">Projects</h1>
 <hr class="line">
<br/>
 <div class="project-container" v-if="projects.length">
<div v-for="project in projects" :key="project.id" class="project">
 <router-link :to="{ name: 'ProjectD', params: {id:project.id}}">
     <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
  <img :src="project.img" class="card-img-top" alt="...">
  <div class="card-body">
     <h2>{{ project.title }}</h2>
    <p class="card-text">{{ project.lang }}</p>
  </div>
  <div class="card-body">
    <button type="button" class="btn btn-outline-primary"><a :href="project.live" class="card-link">Live</a></button>
    <button type="button" class="btn btn-outline-primary"><a :href="project.github" class="card-link">Github</a></button>
  </div>
</div>
 </router-link>
</div>
 </div>

</template>

<script>
export default {
  props: ['id'],
  data() {
      return {
          projects: [{"title":"First Multi-page Portfolio", "id":"1", "img":"https://i.postimg.cc/4xvPCstS/Screenshot-from-2022-01-26-11-37-53.png", "desc":"", "lang":"HTML, CSS", "live":"https://boring-franklin-997f9f.netlify.app", "github":""},
    {"title":"First Single-page Portfolio", "id":"2", "img":"https://i.postimg.cc/GtXSGr32/Screenshot-from-2022-01-26-11-33-18.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP", "live":"https://brave-brown-b7c68c.netlify.app", "github":"https://github.com/Teddy1824/Bootstrap-Portfolio"},
    {"title":"Temperature Convertor", "id":"3", "img":"https://i.postimg.cc/xjmZdDS9/Screenshot-from-2022-01-26-11-37-05.png", "desc":"", "lang":"HTML, CSS BOOTSTRAP,JavaScript", "live":"https://brave-brown-b7c68c.netlify.app", "github":"https://github.com/Teddy1824/Temp-Convertor"},
    {"title":"POS Project", "id":"4", "img":"https://i.postimg.cc/FzfNYPm2/Screenshot-from-2022-01-26-11-43-56.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP, JavaScript", "live":"https://admiring-archimedes-616e96.netlify.app", "github":"https://github.com/Teddy1824/POS-Project"},
    {"title":"Calculator", "id":"5", "img":"https://i.postimg.cc/4y8Hg2Pq/Screenshot-from-2022-01-26-11-37-27.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP, JavaScript", "live":"https://bncalculator.netlify.app", "github":"https://github.com/Teddy1824/Vue.calculator"},
    {"title":"Mercedes Benz Intro page", "id":"6", "img":"https://i.postimg.cc/3NVmbx0t/Screenshot-from-2022-01-31-11-45-40.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP", "live":"https://objective-pasteur-77172a.netlify.app/", "github":"https://github.com/Teddy1824/Media-Query"},
    {"title":"Reaction-Time Game", "id":"7", "img":"https://i.postimg.cc/SR00wfy0/Screenshot-from-2022-02-01-09-22-05.png", "desc":"", "lang":"HTML, CSS, Vue.js", "live":"https://naughty-bell-8b8d72.netlify.app/", "github":"https://github.com/Teddy1824/Vue.reaction-time"}],

      project: null
      }

  },
    computed: {
        project() {
            return this.projects.find(project => project.id == this.$route.params.id)
        }
    }
//   mounted() {
//       fetch('http://localhost:3000/projects')
//       .then(res => res.json())
//       .then(data => this.projects = data)
//       .catch(err => console.log(err.message))
//   },

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