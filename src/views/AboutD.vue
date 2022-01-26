<template>
  <div v-if="info">
      <h1>{{ info.name }}</h1>
      <p>{{ info.first-p }}</p>
  </div>
</template>

<script>
export default {
    props: ['name'],
  data() {
      return {
          info: null
      }
  },
  mounted() {
      fetch('http://localhost:3000/about/' + this.name)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
  },
}
</script>

<style>

</style>