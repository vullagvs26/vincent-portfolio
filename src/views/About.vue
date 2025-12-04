<template>
  <div class=" relative lg:px-6">
    <!-- Navigation -->

    <TopNav />

    <BottomNav />

    <!-- Main Container -->
    <div
      class="bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10 shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
    >
      <!-- Title -->
      <div class="mb-6 md:mb-6">
        <h1 class="font-semibold text-[32px] text-[#FAFAFA] leading-normal">About</h1>
        <div
          class="h-1 w-12 md:w-16 mt-2 rounded"
          style="background: linear-gradient(90deg, #ffda6f, #ffbc5c)"
        ></div>
      </div>

      <!-- About Content -->
      <section class="max-w-4xl mb-4 md:mb-4">
        <p class="text-[15px] font-light text-[#D6D6D6] leading-6 mb-4 md:mb-4">
          Hello! I'm Vincent Vullag, a passionate Web Developer from Philippines with
          expertise in Vue.js, Tailwind CSS, and modern web technologies. I love creating
          beautiful and functional user interfaces.
        </p>

        <p class="text-[15px] font-light text-[#D6D6D6] leading-6 mb-4 md:mb-6">
          With a background in Computer Science and hands-on experience in web
          development, I'm committed to building high-quality applications that solve real
          problems. When I'm not coding, you can find me exploring new technologies or
          doing some video for youtube.
        </p>
      </section>

      <!-- What I'm Doing Section -->
      <section class="mb-12 md:mb-12">
        <h2 class="font-semibold text-[24px] text-[#FAFAFA] leading-normal mb-6 md:mb-8">
          What I'm Doing
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ServiceCard
            icon="fa-pen-nib"
            title="Web Design"
            description="The most modern and high-quality design made at a professional level."
          />
          <ServiceCard
            icon="fa-code"
            title="Web Development"
            description="High-quality development of sites at the professional level."
          />
          <ServiceCard
            icon="fa-mobile-alt"
            title="Virtual Assistant"
            description="Providing administrative support, scheduling, and task management to streamline your workflow."
          />
          <ServiceCard
            icon="fa-camera"
            title="YouTube Automation"
            description="Automating video uploads, scheduling, and channel management to grow your YouTube presence efficiently."
          />
        </div>
      </section>

      <!-- My Tools -->
      <section>
        <h2 class="font-semibold text-[24px] text-[#FAFAFA] leading-normal mb-6 md:mb-8">
          My Tools
        </h2>

        <div class="flex flex-wrap gap-4 text-gray-300">
          <div v-for="tool in tools" :key="tool.name" class="flex flex-col items-center">
            <img :src="tool.img" alt="" class="h-12 md:h-16 w-auto object-contain" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "../components/ServiceCard.vue";
import TopNav from "../components/TopNav.vue";
import BottomNav from "../components/BottomNav.vue";
const tools = [
  { img: "/vincent-portfolio/assets/my-tools/vscode.png" },
  { img: "/vincent-portfolio/assets/my-tools/html.png" },
  { img: "/vincent-portfolio/assets/my-tools/css3.jpg" },
  { img: "/vincent-portfolio/assets/my-tools/javascript.png" },
  { img: "/vincent-portfolio/assets/my-tools/vuejs.png" },
  { img: "/vincent-portfolio/assets/my-tools/vue.png" },
  { img: "/vincent-portfolio/assets/my-tools/tailwind.png" },
  { img: "/vincent-portfolio/assets/my-tools/figma.png" },
  { img: "/vincent-portfolio/assets/my-tools/git.png" },
  { img: "/vincent-portfolio/assets/my-tools/php.png" },
  { img: "/vincent-portfolio/assets/my-tools/laravel.png" },
  { img: "/vincent-portfolio/assets/my-tools/mysql.png" },
  { img: "/vincent-portfolio/assets/my-tools/postgre.png" },
  { img: "/vincent-portfolio/assets/my-tools/oracle.png" },
  { img: "/vincent-portfolio/assets/my-tools/premiere-pro.png" },
  { img: "/vincent-portfolio/assets/my-tools/photoshop.png" },
  { img: "/vincent-portfolio/assets/my-tools/sonyvegas.png" },
  { img: "/vincent-portfolio/assets/my-tools/youtube.png" },
];
</script>
