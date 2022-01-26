<template>
  <div class="about">
    <div v-for="info in about" :key="info.name" class="info">
     <router-link :to="{ name: 'AboutD', params: { name: info.name}}">
    <h1>This is an about page</h1>
    <h2>{{ info.name }} {{ info.surname }}</h2>
    <p>{{ info.first-p }}</p>
    <p>{{ info.second-p }}</p>
     </router-link>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
      return {
          about: []
      }
  },
  mounted() {
      fetch('http://localhost:3000/about')
      .then(res => res.json())
      .then(data => this.about = data)
      .catch(err => console.log(err.message))
  }
}

</script>