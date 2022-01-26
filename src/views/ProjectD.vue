<template>
  <div v-if="project">
      <h1>{{ project.title }}</h1>
      <p>{{ project.desc }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
      return {
          project: null
      }
  },
    mounted() {
      fetch('http://localhost:3000/projects/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
  },
}
</script>

<style>

</style>