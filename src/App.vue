<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Bongani N.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="collapse">
      <span class="navbar-toggler-icon" @click="collapse"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" @click="collapse">Home</router-link>
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/about" @click="collapse">About</router-link>
        </li>
        <br/>
        <!-- <li class="nav-item">
          <router-link to="/timeline">Timeline</router-link> |
        </li>
        <br/> -->
        <li class="nav-item">
          <router-link to="/projects" @click="collapse">Projects</router-link>
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/skills" @click="collapse">Skills</router-link>   
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/testimonials" @click="collapse">Testimonials</router-link>   
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/contact" @click="collapse">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  <transition name="router-animation">
  
  <router-view/>

  </transition>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  /* overflow-y: hidden; */
  background-color: #e5e4e2;
  height: 61rem;
}

.bg-light {
    background-color: #f8f9fa!important;
    border-bottom-right-radius: 8%;
    border-bottom-left-radius: 8%;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;
  font-size: larger;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li.nav-item {
    margin-inline: 5px;
    list-style-type: none;
}

div#navbarNav {
    justify-content: end;
}

.nav-item {
  color: #83818c;
  padding: 20px;
  text-decoration: none;
  transition: .3s;
  margin: 0 6px;
  z-index: 1;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  position: relative;
  
}
  .nav-item:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #dfe2ea;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: .3s;
  }

.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0;
}


.nav-item:not(.is-active):hover { color: #333; }

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
}

@media (max-width: 580px) {
  .nav { overflow: auto; }
}

.router-animation-enter-active {
  animation: coming 1s;
  animation-delay: .1s;
  opacity: 0;
}

.router-animation-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>

<script>
export default {
 methods: {
     collapse(){
    let navcollapse = document.getElementsByClassName("collapse")[0]

    navcollapse.classList.toggle("show")
}


 },
}
</script>