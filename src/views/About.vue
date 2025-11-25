<template>
  <div class="md:px-10 pb-20 relative">
    <!-- Navigation -->
    <nav
      class="absolute top-0 right-10 flex justify-end md:gap-10 text-sm md:text-lg bg-[#282829] border border-[#383838] rounded-tr-2xl rounded-bl-2xl px-6 py-4"
    >
      <router-link to="/" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        >
          About
        </button>
      </router-link>

      <router-link to="/resume" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        >
          Resume
        </button>
      </router-link>
      <router-link to="/portfolio" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        >
          Portfolio
        </button>
      </router-link>
    </nav>

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

const tools = [
  { img: "/src/assets/my-tools/vscode.png" },
  { img: "/src/assets/my-tools/html.png" },
  { img: "/src/assets/my-tools/css3.jpg" },
  { img: "/src/assets/my-tools/javascript.png" },
  { img: "/src/assets/my-tools/vuejs.png" },
  { img: "/src/assets/my-tools/vue.png" },
  { img: "/src/assets/my-tools/tailwind.png" },
  { img: "/src/assets/my-tools/figma.png" },
  { img: "/src/assets/my-tools/git.png" },
  { img: "/src/assets/my-tools/php.png" },
  { img: "/src/assets/my-tools/laravel.png" },
  { img: "/src/assets/my-tools/mysql.png" },
  { img: "/src/assets/my-tools/postgre.png" },
  { img: "/src/assets/my-tools/oracle.png" },
  { img: "/src/assets/my-tools/premiere-pro.png" },
  { img: "/src/assets/my-tools/photoshop.png" },
  { img: "/src/assets/my-tools/sonyvegas.png" },
  { img: "/src/assets/my-tools/youtube.png" },
];
</script>
