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
    <div class="bg-[#1E1E1F] border border-[#383838] rounded-2xl p-6 md:p-10">
      <!-- Title -->
      <div class="mb-8 md:mb-12">
            <h1 class="font-semibold text-[32px] text-[#FAFAFA] leading-normal">Portfolio</h1>
         <div
          class="h-1 w-12 md:w-16 mt-2 rounded"
          style="background: linear-gradient(90deg, #ffda6f, #ffbc5c)"
        ></div>
      </div>

    
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "../components/ServiceCard.vue";
</script>
