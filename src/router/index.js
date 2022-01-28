import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import Timeline from '../views/Timeline.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import ProjectD from '../views/ProjectD.vue'
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about/:name',
    name: 'AboutD',
    component: About,
    props: true
  },
  // {
  //   path: '/timeline',
  //   name: 'Timeline',
  //   component: Timeline
  // },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectD',
    component: ProjectD,
    props: true
  },  
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
