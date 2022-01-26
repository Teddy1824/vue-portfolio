<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Bongani N.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Home</router-link> |
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/about">About</router-link> |
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/timeline">Timeline</router-link> |
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/projects">Projects</router-link> |
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/skills">Skills</router-link> |   
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/testimonials">Testimonials</router-link> |   
        </li>
        <br/>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
</style>
