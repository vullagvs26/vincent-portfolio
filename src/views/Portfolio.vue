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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"
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
          class="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Project Image -->
        <div class="relative h-64 md:h-80 overflow-hidden rounded-t-2xl bg-[#282829]">
          <img
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="w-full h-full object-cover"
          />
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/20"></div>
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
              v-if="selectedProject.link && selectedProject.link !== '#'"
              :href="selectedProject.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#ffda6f] hover:underline flex items-center gap-1"
            >
              <i class="fas fa-external-link-alt"></i>View Project
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
    title: "Urla Elegance Iskele",
    category: "Web Design",
    date: "October 9, 2022",
    image: "https://via.placeholder.com/400x300?text=Urla+Elegance",
    link: "#",
    description:
      "I am the site supervisor of the construction consisting of 2 types and 8 villas in total in the Iskele District of Urla. Our launch sales have also started in this project, which will be unique. For communication and detailed information, you can visit the Tire İnşaat website and call 0 (412) 224 56 30.",
    technologies: ["Project Management", "Construction", "Supervision"],
  },
  {
    id: 2,
    title: "Infinity CMS V.1.0",
    category: "Web Development",
    date: "March 15, 2023",
    image: "https://via.placeholder.com/400x300?text=Infinity+CMS",
    link: "#",
    description:
      "A modern and powerful CMS (Content Management System) built with Vue.js and Laravel. Infinity CMS provides a complete solution for managing digital content with an intuitive interface and powerful features for content creators and administrators.",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "PayVel - Pre-Accounting Program",
    category: "Web Development",
    date: "June 20, 2023",
    image: "https://via.placeholder.com/400x300?text=PayVel",
    link: "#",
    description:
      "A comprehensive pre-accounting program designed to streamline financial operations and accounting workflows. PayVel provides tools for invoice management, expense tracking, and financial reporting with real-time data analysis.",
    technologies: ["Vue.js", "Node.js", "MySQL", "Chart.js"],
  },
  {
    id: 4,
    title: "Filament OTP Login",
    category: "Web Development",
    date: "August 10, 2023",
    image: "https://via.placeholder.com/400x300?text=Filament+OTP",
    link: "#",
    description:
      "An advanced authentication system using One-Time Password (OTP) built for FilamentPHP. This system enhances security by implementing time-based OTP verification for user authentication and account protection.",
    technologies: ["PHP", "Laravel", "FilamentPHP", "MySQL"],
  },
  {
    id: 5,
    title: "FilamentPHP LeafletJS Map Picker",
    category: "Web Development",
    date: "September 5, 2023",
    image: "https://via.placeholder.com/400x300?text=Map+Picker",
    link: "#",
    description:
      "An interactive map picker component for FilamentPHP using LeafletJS. This tool allows users to select locations on a map within FilamentPHP admin panels, perfect for geo-location based data collection.",
    technologies: ["PHP", "Laravel", "LeafletJS", "FilamentPHP"],
  },
  {
    id: 6,
    title: "Filament Translatable Pro",
    category: "Web Development",
    date: "October 30, 2023",
    image: "https://via.placeholder.com/400x300?text=Translatable+Pro",
    link: "#",
    description:
      "A powerful translation management system for FilamentPHP that enables multi-language support. Filament Translatable Pro simplifies the process of managing content translations with an intuitive interface and automated workflows.",
    technologies: ["PHP", "Laravel", "FilamentPHP", "i18n"],
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
