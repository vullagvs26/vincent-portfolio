<template>
  <div class="md:px-10 pb-20 relative">
    <!-- Navigation -->
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

      <button class="text-gray-400 hover:text-yellow-400">Portfolio</button>
    </nav>

    <!-- Main Container -->
    <div class="bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10">
      <!-- Title -->
      <div class="mb-8 md:mb-12">
        <h1 class="font-poppins font-semibold text-[32px] text-[#FAFAFA] leading-normal">
          About Me
        </h1>
        <div class="h-1 w-12 bg-yellow-400 mt-2 rounded"></div>
      </div>

      <!-- About Content -->
      <section class="max-w-4xl mb-12 md:mb-16">
        <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
          Hello! I'm Vincent Vullag, a passionate Web Developer with expertise in Vue.js,
          Tailwind CSS, and modern web technologies. I love creating beautiful and
          functional user interfaces.
        </p>

        <p class="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
          With a background in Computer Science and hands-on experience in web
          development, I'm committed to building high-quality applications that solve real
          problems.
        </p>

        <p class="text-base md:text-lg text-gray-300 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies or contributing
          to open-source projects.
        </p>
      </section>

      <!-- What I'm Doing Section -->
      <section class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8">What I'm Doing</h2>

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
            title="Mobile Apps"
            description="Professional development of applications for iOS and Android."
          />
          <ServiceCard
            icon="fa-camera"
            title="Youtube"
            description="I make high-quality photos of any category at a professional level."
          />
        </div>
      </section>

      <!-- Testimonials -->
      <section>
        <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Testimonials</h2>
        <div class="text-gray-300">
          <!-- Add testimonials here -->
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "../components/ServiceCard.vue";
</script>
