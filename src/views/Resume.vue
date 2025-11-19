<template>
  <div class="px-10 pb-20">
    <!-- Page Title -->
    <div class="mb-12">
      <h1 class="text-5xl font-bold flex items-center gap-3">
        <i class="fas fa-book text-yellow-400"></i>
        Resume
      </h1>
      <div class="h-1 w-16 bg-yellow-400 mt-2 rounded"></div>
    </div>

    <!-- Education Section -->
    <section class="mt-12">
      <h2 class="text-3xl font-semibold mb-8 flex items-center gap-3">
        <i class="fas fa-graduation-cap text-yellow-400"></i>
        Education
      </h2>

      <!-- Timeline -->
      <div class="space-y-8">
        <ResumeCard
          v-for="item in education"
          :key="item.title"
          :item="item"
        />
      </div>
    </section>

    <!-- Experience Section -->
    <section class="mt-12 mb-20">
      <h2 class="text-3xl font-semibold mb-8 flex items-center gap-3">
        <i class="fas fa-rocket text-yellow-400"></i>
        Experience
      </h2>

      <div class="space-y-8">
        <ResumeCard
          v-for="item in experience"
          :key="item.title"
          :item="item"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import ResumeCard from "../components/ResumeCard.vue";

const education = [
  {
    title: "BS Computer Science",
    date: "2019 — 2023",
    description:
      "Graduated with a major in Computer Science focusing on software engineering and system development."
  },
  {
    title: "Frontend Development Bootcamp",
    date: "2022/01 — 2022/03",
    description:
      "Trained in Vue.js, Tailwind CSS, and modern UI engineering."
  },
];

const experience = [
  {
    title: "IT Staff @ Fujitsu",
    date: "2024 — Present",
    description:
      "Supporting press section systems and building digital tools."
  },
];
</script>