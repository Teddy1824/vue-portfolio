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
          projects: [{"title":"First Multi-page Portfolio", "id":"1", "img":"https://i.postimg.cc/4xvPCstS/Screenshot-from-2022-01-26-11-37-53.png", "desc":"", "lang":"HTML, CSS", "live":"https://boring-franklin-997f9f.netlify.app", "github":""},
    {"title":"First Single-page Portfolio", "id":"2", "img":"https://i.postimg.cc/GtXSGr32/Screenshot-from-2022-01-26-11-33-18.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP", "live":"https://brave-brown-b7c68c.netlify.app", "github":"https://github.com/Teddy1824/Bootstrap-Portfolio"},
    {"title":"Temperature Convertor", "id":"3", "img":"https://i.postimg.cc/xjmZdDS9/Screenshot-from-2022-01-26-11-37-05.png", "desc":"", "lang":"HTML, CSS BOOTSTRAP,JavaScript", "live":"https://brave-brown-b7c68c.netlify.app", "github":"https://github.com/Teddy1824/Temp-Convertor"},
    {"title":"POS Project", "id":"4", "img":"https://i.postimg.cc/FzfNYPm2/Screenshot-from-2022-01-26-11-43-56.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP, JavaScript", "live":"https://admiring-archimedes-616e96.netlify.app", "github":"https://github.com/Teddy1824/POS-Project"},
    {"title":"Calculator", "id":"5", "img":"https://i.postimg.cc/4y8Hg2Pq/Screenshot-from-2022-01-26-11-37-27.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP, JavaScript", "live":"https://bncalculator.netlify.app", "github":"https://github.com/Teddy1824/Vue.calculator"},
    {"title":"Mercedes Benz Intro page", "id":"6", "img":"https://i.postimg.cc/3NVmbx0t/Screenshot-from-2022-01-31-11-45-40.png", "desc":"", "lang":"HTML, CSS, BOOTSTRAP", "live":"https://objective-pasteur-77172a.netlify.app/", "github":"https://github.com/Teddy1824/Media-Query"},
    {"title":"Reaction-Time Game", "id":"7", "img":"https://i.postimg.cc/SR00wfy0/Screenshot-from-2022-02-01-09-22-05.png", "desc":"", "lang":"HTML, CSS, Vue.js", "live":"https://naughty-bell-8b8d72.netlify.app/", "github":"https://github.com/Teddy1824/Vue.reaction-time"}],
      }
  },
  //   mounted() {
  //     fetch('http://localhost:3000/projects/' + this.id)
  //       .then(res => res.json())
  //       .then(data => this.job = data)
  //       .catch(err => console.log(err.message))
  // },
}
</script>

<style>

</style>