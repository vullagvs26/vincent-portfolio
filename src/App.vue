<template>
  <div class="min-h-screen bg-[#0d0d0d] text-white flex gap-6 p-6">
    <Sidebar />

    <div class="flex-1">
      <TopNav />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import TopNav from "./components/TopNav.vue";
</script>