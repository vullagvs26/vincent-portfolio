import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Resume from './views/Resume.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', component: About },
  { path: '/resume', component: Resume },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')