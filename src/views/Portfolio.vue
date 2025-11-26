<template>
  <div class="pb-20 relative lg:px-6">
    <!-- Navigation -->
    <TopNav />
    <BottomNav />


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
import TopNav from "../components/TopNav.vue";
import BottomNav from "../components/BottomNav.vue";
</script>
