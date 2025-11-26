<template>
  <footer class="py-8">
    <div class="flex flex-col items-center justify-center gap-6">
      <!-- Copyright text -->
      <div class="text-center text-gray-500 text-sm">
        <p>&copy; {{ currentYear }} Vincent Vullag. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
