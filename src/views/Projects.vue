<template>
 <h1>Projects</h1>

 <label>Sort Name:</label>
 <select v-model="name" @change="sortName(name)">
     <option value="select">-Select-</option>
     <option value="asc">Ascending</option>
     <option value="desc">Descending</option>
 </select>

 <label>Sort Language:</label>
 <select v-model="slang" @change="sortLang(slang)">
     <option value="select">-Select-</option>
     <option value="asc">Ascending</option>
     <option value="desc">Descending</option>
 </select>

 <label>Filter by Language</label>
 <select v-model="flang" @change="filterLang(flang)">
     <option value="all">All</option>
     <option value="html">HTML</option>
     <option value="javascript">JavaScript</option>
     <option value="vue">Vue</option>
 </select>
 <br/>

 <div class="project-container" v-if="projects.length">
<div v-for="project in projects" :key="project.id" class="project">
 <router-link :to="{ name: 'ProjectD', params: {id:project.id}}">
     <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
  <img :src="project.img" class="card-img-top" alt="...">
  <div class="card-body">
     <h2>{{ project.title }}</h2>
    <p class="card-text">{{ project.desc }}</p>
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
          projects: [],

          name: '',
          slang: '',
          flang: ''
      }
  },
  mounted() {
      fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
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