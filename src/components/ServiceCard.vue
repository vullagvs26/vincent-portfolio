<template>
  <div
    class="bg-[#1a1a1a] p-4 md:p-6 rounded-3xl border border-[#383838] hover:border-[#FFDB70] transition"
  >
    <div class="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
      <div class="p-2 md:p-3 rounded-lg shrink-0">
        <i
          :class="`fas ${icon} text-lg md:text-3xl`"
          :style="{
            background: 'linear-gradient(90deg, #ffda6f, #ffbc5c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }"
        >
        </i>
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
