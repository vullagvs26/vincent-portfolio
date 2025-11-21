<template>
  <div class="bg-[#1a1a1a] p-4 md:p-6 rounded-lg border border-[#383838] hover:border-yellow-400 transition">
    <div class="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
      <div class="bg-yellow-500/20 p-2 md:p-3 rounded-lg flex-shrink-0">
        <i :class="`fas ${icon} text-yellow-400 text-lg md:text-2xl`"></i>
      </div>
      <h3 class="text-lg md:text-xl font-semibold">{{ title }}</h3>
    </div>
    <p class="text-sm md:text-base text-gray-300">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>