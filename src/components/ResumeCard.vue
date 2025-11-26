<template>
  <div class="relative pl-10 mb-6">
    <!-- Vertical line connecting cards (extends through gap) -->
    <div class="absolute left-5.5 -top-8 bottom-0 w-px bg-[#383838]"></div>

    <!-- Background aligned with vertical line -->
    <div
      class="absolute left-0 -right-6 top-0 bottom-0 bg-[#282829] rounded-lg opacity-50 -z-10"
    ></div>

    <!-- dot -->
    <span
      class="w-4 h-4 rounded-full absolute left-3.5 top-0.5 bg-[#383838] flex items-center justify-center"
    >
      <span
        class="w-2 h-2 rounded-full bg-linear-to-r from-[#ffda6f] to-[#ffbc5c]"
      ></span>
    </span>

    <h3 class="font-semibold text-[16px] ml-5 text-white leading-normal">
      {{ item.title }}
    </h3>

    <p class="font-normal text-[15px] ml-5 leading-6 text-[rgb(206,177,90)]">
      {{ item.date }}
    </p>
    <p class="font- font-light text-[15px] ml-5 leading-6 text-[rgb(214,214,214)] mt-2">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});
</script>
