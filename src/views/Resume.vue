<template>
  <div class="md:px-10 pb-20 relative">
    <!-- Top Navigation -->
    <nav
      class="absolute top-0 right-10 flex justify-end md:gap-10 text-sm md:text-lg bg-[#282829] border border-[#383838] rounded-tr-2xl rounded-bl-2xl px-6 py-4"
    >
      <router-link to="/" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'"
        >
          About
        </button>
      </router-link>
      <router-link to="/resume" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'"
        >
          Resume
        </button>
      </router-link>
      <button class="text-gray-400 hover:text-yellow-400 hidden sm:block">
        Portfolio
      </button>
    </nav>

    <!-- Main Container with background and border -->
    <div class="bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10 ">
      <!-- Page Title -->
      <div class="mb-8 md:mb-12">
        <h1 class="text-3xl md:text-5xl font-bold flex items-center gap-2 md:gap-3">
          <i class="fas fa-book text-yellow-400 text-2xl md:text-4xl"></i>
          Resume
        </h1>
        <div class="h-1 w-12 md:w-16 bg-yellow-400 mt-2 rounded"></div>
      </div>

      <!-- Education Section -->
      <section class="mt-8 md:mt-12">
        <h2
          class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center gap-2 md:gap-3"
        >
          <i class="fas fa-graduation-cap text-yellow-400 text-lg md:text-2xl"></i>
          Education
        </h2>

        <!-- Timeline -->
        <div class="space-y-6 md:space-y-8">
          <ResumeCard v-for="item in education" :key="item.title" :item="item" />
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mt-8 md:mt-12 mb-12 md:mb-20">
        <h2
          class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center gap-2 md:gap-3"
        >
          <i class="fas fa-rocket text-yellow-400 text-lg md:text-2xl"></i>
          Experience
        </h2>

        <div class="space-y-6 md:space-y-8">
          <ResumeCard v-for="item in experience" :key="item.title" :item="item" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ResumeCard from "../components/ResumeCard.vue";

const education = [
  {
    title: "BS Computer Science",
    date: "2019 — 2023",
    description:
      "Graduated with a major in Computer Science focusing on software engineering and system development.",
  },
  {
    title: "Frontend Development Bootcamp",
    date: "2022/01 — 2022/03",
    description: "Trained in Vue.js, Tailwind CSS, and modern UI engineering.",
  },
];

const experience = [
  {
    title: "IT Staff @ Fujitsu",
    date: "2024 — Present",
    description: "Supporting press section systems and building digital tools.",
  },
];
</script>
