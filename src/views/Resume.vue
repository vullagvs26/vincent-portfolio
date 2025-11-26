<template>
  <div class="md:px-6 pb-20 relative">
    <!-- Top Navigation -->
    <nav
      class="absolute top-0 right-6 flex justify-end md:gap-10 text-sm md:text-lg bg-[#282829] border border-[#383838] rounded-tr-2xl rounded-bl-2xl px-6 py-4"
    >
      <router-link to="/" v-slot="{ isActive }">
        <button
          :class="
            isActive
              ? 'text-[rgb(255,219,112)]'
              : 'text-gray-400 hover:text-[rgb(255,219,112)]'
          "
        >
          About
        </button>
      </router-link>
      <router-link to="/resume" v-slot="{ isActive }">
        <button
          :class="
            isActive
              ? 'text-[rgb(255,219,112)]'
              : 'text-gray-400 hover:text-[rgb(255,219,112)]'
          "
        >
          Resume
        </button>
      </router-link>
      <router-link to="/portfolio" v-slot="{ isActive }">
        <button
          :class="
            isActive
              ? 'text-[rgb(255,219,112)]'
              : 'text-gray-400 hover:text-[rgb(255,219,112)]'
          "
        >
          Portfolio
        </button>
      </router-link>
    </nav>

    <!-- Main Container with background and border -->
    <div class="bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10">
      <!-- Page Title -->
      <div class="mb-8 md:mb-12">
        <h1 class="font-semibold text-[32px] text-[#FAFAFA] leading-normal">Resume</h1>
        <div
          class="h-1 w-12 md:w-16 mt-2 rounded"
          style="background: linear-gradient(90deg, #ffda6f, #ffbc5c)"
        ></div>
      </div>

      <!-- Experience Section -->
      <section class="mt-8 md:mt-12 mb-12 md:mb-20">
        <h2
          class="font-semibold text-[24px] md:text-[24px] text-[rgb(250,250,250)] mb-6 md:mb-8 flex items-center gap-2 md:gap-3"
        >
          <span class="w-[46px] h-[46px] flex items-center justify-center bg-[#202022] rounded-xl  border-[#555555]" style="box-shadow: 0 0 12px rgba(0, 0, 0, 0.3)">
            <i class="fas fa-terminal text-[rgb(255,219,112)] text-sm"></i>
          </span>
          Experience
        </h2>

           <div class="space-y-0">
          <ResumeCard v-for="item in experience" :key="item.title" :item="item" />
        </div>
      </section>

      <!-- Education Section -->
      <section class="mt-8 md:mt-12">
        <h2
          class="font-semibold text-[24px] md:text-[24px] text-[rgb(250,250,250)] mb-6 md:mb-8 flex items-center gap-2 md:gap-3"
        >
           <span class="w-[46px] h-[46px] flex items-center justify-center bg-[#202022] rounded-xl  border-[#555555]" style="box-shadow: 0 0 12px rgba(0, 0, 0, 0.3)">
            <i class="fas fa-graduation-cap text-[rgb(255,219,112)] text-sm"></i>
          </span>
          Education
        </h2>

        <!-- Timeline -->
         <div class="space-y-0">
          <ResumeCard v-for="item in education" :key="item.title" :item="item" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ResumeCard from "../components/ResumeCard.vue";

const education = [
  {
    title: "BS Computer Science @ NU Laguna",
    date: "2019 — 2023",
    description:
      "Completed a Bachelor of Science in Computer Science at NU Laguna, focusing on software engineering, system development, and modern computing principles. Gained hands-on experience in programming, database management, and application development, preparing for professional roles in the IT industry.",
  },
];

const experience = [
  {
    title: "System Developer @ Fujitsu",
    date: "June 2024 — Present · 1 yr 6 mos",
    description:
      "Developing and maintaining manufacturing and business systems, analyzing technical requirements, coding and testing, troubleshooting issues, maintaining databases and system documentation, providing technical support and end-user training, and ensuring system security and performance. Also supports IT improvements, system upgrades, and compliance with QMS, EMS, CSR, and safety regulations.",

    logo: "/src/assets/fujitsu.png",
  },

  {
    title: "IT Consultant @ Cuatrix",
    date: "June 2023 — Feb 2024 · 8 mos",
    description:
      "Handled SAP front-end troubleshooting by managing and resolving incidents through ServiceNow, documenting solutions for future reference, and creating accurate incident reports. Leveraged artificial intelligence, machine learning, and available self-service tools to quickly find relevant answers and resolve issues independently, while also utilizing real-time support channels for direct access to SAP experts.",
  },
  {
    title: "Internship @ Hacktiv Colab Inc.",
    date: "Jan 2023 — April 2023 · 4 mos",
    description:
      "Worked on the Microsoft Power Platform, primarily developing and customizing solutions using Power Apps. Assisted in building applications to streamline business processes, automate workflows, and enhance overall productivity during the 4-month internship.",
  },
];
</script>
