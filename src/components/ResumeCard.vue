<template>
  <div class="relative pl-10 border-l border-[#383838]">
     <!-- dot -->
    <span
      class="w-3 h-3  rounded-full absolute -left-[7px] top-1"
      style="background: linear-gradient(90deg, #ffda6f, #ffbc5c)"
    ></span>
    <h3 class="font-semibold text-[16px] text-white leading-normal">
      {{ item.title }}
    </h3>
    <p class="font-normal text-[15px] leading-6 text-[rgb(206,177,90)]">
      {{ item.date }}
    </p>
    <p class="font- font-light text-[15px] leading-6 text-[rgb(214,214,214)] mt-2">
      {{ item.description }}
    </p>
  </div>
</template>



<script setup>
defineProps({
  item: Object,
});
</script>
