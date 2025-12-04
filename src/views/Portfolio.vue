<template>
  <div class="relative lg:px-6">
    <!-- Navigation -->
    <TopNav />
    <BottomNav />

    <!-- Main Container -->
    <div
      class="bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10 shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
    >
      <!-- Title -->
      <div class="mb-8 md:mb-12">
        <h1 class="font-semibold text-[32px] text-[#FAFAFA] leading-normal">Portfolio</h1>
        <div
          class="h-1 w-12 md:w-16 mt-2 rounded"
          style="background: linear-gradient(90deg, #ffda6f, #ffbc5c)"
        ></div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-4 md:gap-6 border-[#383838] overflow-x-auto pb-3">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="
            activeCategory === category
              ? 'text-[#ffda6f]  border-[#ffda6f]'
              : 'text-gray-400 hover:text-gray-300'
          "
          class="pb-3 px-2 md:px-1 whitespace-nowrap font-normal transition-colors text-sm md:text-base shrink-0"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          v-for="project in filteredProjects"
          :key="project.id"
          @click="openModal(project)"
          class="group relative overflow-hidden rounded-2xl border border-[#383838] hover:border-[#ffda6f] transition-all duration-300 text-left"
        >
          <!-- Project Image -->
          <div class="relative h-48 md:h-56 overflow-hidden bg-[#282829]">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"
            ></div>
          </div>

          <!-- Content -->
          <div class="p-4 md:p-6 bg-[#1a1a1a]">
            <h3 class="font-semibold text-[16px] md:text-lg text-white mb-2 line-clamp-2">
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-400">{{ project.category }}</p>
          </div>
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <p class="text-gray-400">No projects found in this category.</p>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-[#1E1E1F] rounded-2xl border border-[#383838] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        @click.stop
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10 p-1 rounded-lg"
          style="
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
          "
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Project Image -->
        <div class="relative rounded-t-2xl bg-[#282829]">
          <img
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="w-full h-auto object-contain"
          />
        </div>

        <!-- Modal Content -->
        <div class="p-6 md:p-8">
          <!-- Title -->
          <h2 class="font-semibold text-2xl md:text-3xl text-white mb-3">
            {{ selectedProject.title }}
          </h2>

          <!-- Meta Information -->
          <div class="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
            <span v-if="selectedProject.date">
              <i class="fas fa-calendar mr-2"></i>{{ selectedProject.date }}
            </span>
            <span class="flex items-center gap-1">
              <i class="fas fa-tag"></i>{{ selectedProject.category }}
            </span>
            <a
              v-if="selectedProject.codeLink && selectedProject.codeLink !== '#'"
              :href="selectedProject.codeLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#ffda6f] hover:underline flex items-center gap-1"
            >
              <i class="fab fa-github"></i>Code
            </a>
            <a
              v-if="selectedProject.link && selectedProject.link !== '#'"
              :href="selectedProject.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#ffda6f] hover:underline flex items-center gap-1"
            >
              <i class="fas fa-external-link-alt"></i>Preview
            </a>
          </div>

          <!-- Description -->
          <div class="mb-6">
            <h3 class="font-semibold text-lg text-white mb-3">About</h3>
            <p class="text-gray-300 leading-7">
              {{ selectedProject.description }}
            </p>
          </div>

          <!-- Technologies (if available) -->
          <div v-if="selectedProject.technologies && selectedProject.technologies.length">
            <h3 class="font-semibold text-lg text-white mb-3">Technologies</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in selectedProject.technologies"
                :key="tech"
                class="bg-[#2a2a2a] px-4 py-2 rounded-lg text-sm text-gray-300 border border-[#383838]"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import TopNav from "../components/TopNav.vue";
import BottomNav from "../components/BottomNav.vue";

const activeCategory = ref("All");
const selectedProject = ref(null);

const handleKeydown = (event) => {
  if (event.key === "Escape" && selectedProject.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});

const projects = [
  {
    id: 1,
    title: "Hulma Aesthetic Studio",
    category: "Web Development",
    date: "February 21, 2025",
    image: "/vincent-portfolio/assets/projects/hulma1.png",
    link: "https://hulma.netlify.app",
    codeLink: "https://github.com/vullagvs26/HULMA",
    description:
      "Led the front-end development of Hulma Aesthetic Studio’s online booking website. The platform allows clients to seamlessly book appointments, explore available services, and learn more about the studio. Built with Vue.js and Vite, the site features an intuitive calendar booking experience powered by v-calendar and an automated email notification system using EmailJS. This project also served as part of a marketing initiative to strengthen Hulma’s online presence and improve customer engagement.",
    technologies: ["Vue.js", "Vite", "v-calendar", "emailjs", "TypeScript"],
  },
  {
    id: 2,
    title: "Line Out System",
    category: "Web Development",
    date: "August 8, 2025",
    image: "/vincent-portfolio/assets/projects/los.png",
    link: "#",
    codeLink: "#",
    description:
      "Built a full-stack manufacturing system for Fujitsu designed to manage the line-in and line-out workflow of production items. The system enables staff to accurately log product movement, track units requiring repair or troubleshooting, and monitor where each item will proceed next. It also includes model management, user role management, error management, and real-time notifications to support smooth operations. Authentication is integrated with the official Company portal using token-based access, ensuring secure and centralized user control.",
    technologies: [
      "Vue.js",
      "Primevue",
      "PHP",
      "Laravel",
      "MySQL Workbench",
      "Oracle DB",
      "Figma",
      "draw.io",
      "axios",
      "pinia",
      "tailwindcss",
    ],
  },
  {
    id: 3,
    title: "Tindog",
    category: "Web Development",
    date: "3 years ago",
    image: "/vincent-portfolio/assets/projects/tindog.png",
    link: "https://vullagvs26.github.io/tindogChallenge/",
    codeLink: "https://github.com/vullagvs26/tindogChallenge",
    description:
      "A practice project created as part of a Udemy certification task, where I replicated the Tindog website design to strengthen my front-end development skills. This project helped me improve my understanding of layout structuring, responsive design, and modern UI implementation while closely following a given design reference.",
    technologies: ["HTML", "CSS"],
  },
  {
    id: 4,
    title: "Helpdesk System Prototype",
    category: "Web Design",
    date: "Last Year",
    image: "/vincent-portfolio/assets/projects/helpdesk.png",
    link:
      "https://www.figma.com/design/CenOoqKCUVlM97YCxgYrKZ/Helpdesk?node-id=0-1&t=fs1PrZ7M7BClGiux-1",
    codeLink: "https://github.com/vullagvs26/helpdesk-system",
    description:
      "Created a Helpdesk System prototype as part of my initial training in the company, focusing on understanding the authorization process and user management within the internal company portal. The prototype simulated a ticket-raising service where users could submit concerns related to manufacturing systems. This project helped me gain hands-on experience with access control, workflow planning, and designing a functional support system for internal operations.",
    technologies: [
      "Project Management",
      "Vue.js",
      "draw.io",
      "PHP",
      "Laravel",
      "PosgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    id: 5,
    title: "Hulma Prototype",
    category: "Web Design",
    date: "March 1, 2025",
    image: "/vincent-portfolio/assets/projects/hulma.png",
    link:
      "https://www.figma.com/design/1q7vRuuOT1CJuUBv7QBXOQ/HULMA?node-id=0-1&t=Dl1aRlfefaobgw8k-1",
    codeLink: "#",
    description:
      "Designed a prototype for Hulma Aesthetic Studio’s website to plan and visualize the user interface and user experience before development. The design focused on presenting services clearly, enabling intuitive navigation, and creating an appealing online presence. Built using Vue.js, Laravel, PostgreSQL, and Tailwind CSS, the prototype served as a foundation for both the visual layout and functional planning of the final website.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
  },
  {
    id: 6,
    title: "Line Out System",
    category: "Web Design",
    date: "March 30, 2023",
    image: "/vincent-portfolio/assets/projects/lineoutsystem.png",
    link:
      "https://www.figma.com/design/hVF3mD1m6oMZPJFXxiGXlj/LOSv2?node-id=0-1&t=bm3bkIl6yAUmgB1E-1",
    codeLink: "#",
    description:
      "Designed the UI/UX of the Line Out System using Figma, creating detailed user flows, layout prototypes, and interface components to ensure a clean, intuitive, and efficient design. The design served as a foundational blueprint for the system’s development, guiding implementation with technologies like Node.js, MySQL, and Chart.js. Through thoughtful user-centred design, the project aimed to improve usability, data visualization, and overall user experience before coding began.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
  },
];

const categories = computed(() => {
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  return cats;
});

const filteredProjects = computed(() => {
  if (activeCategory.value === "All") {
    return projects;
  }
  return projects.filter((p) => p.category === activeCategory.value);
});

const openModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = "auto";
};
</script>
