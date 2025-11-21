<template>
  <div class="min-h-screen bg-[#121212] text-white flex justify-center p-4 md:p-6 pt-8 md:pt-16">
    <div class="flex flex-col lg:flex-row gap-0 md:gap-1 w-full max-w-6xl">
      
      <!-- Sidebar stays in place -->
      <div class="w-full lg:w-[260px] shrink-0 sticky top-0 h-screen">
        <Sidebar />
      </div>

      <!-- Main content scrolls normally -->
      <div class="flex-1 flex flex-col min-w-0">
        <router-view />
      </div>

    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>
