import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Resume from "./views/Resume.vue";
import About from "./views/About.vue";
import Portfolio from "./views/Portfolio.vue";
import PrimeVue from "primevue/config";
import Timeline from "primevue/timeline";

const routes = [
  { path: "/", component: About },
  { path: "/resume", component: Resume },
  { path: "/portfolio", component: Portfolio },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component("Timeline", Timeline);

app.mount("#app");
