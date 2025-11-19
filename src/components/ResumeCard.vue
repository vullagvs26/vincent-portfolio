<template>
  <div class="relative pl-10 border-l border-gray-700">
    <!-- Yellow dot -->
    <span
      class="w-3 h-3 bg-yellow-500 rounded-full absolute -left-[7px] top-1"
    ></span>

    <h3 class="text-xl font-semibold">{{ item.title }}</h3>
    <p class="text-yellow-400 font-medium">{{ item.date }}</p>
    <p class="mt-2 text-gray-300 leading-relaxed">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});
</script>
