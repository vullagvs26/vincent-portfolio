<template>
  <nav class="flex justify-end px-10 py-6 text-lg space-x-10">
    <router-link to="/" v-slot="{ isActive }">
      <button :class="isActive ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'">
        About
      </button>
    </router-link>
    <router-link to="/resume" v-slot="{ isActive }">
      <button :class="isActive ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-gray-400 hover:text-yellow-400'">
        Resume
      </button>
    </router-link>
    <button class="text-gray-400 hover:text-yellow-400">Portfolio</button>

  </nav>
</template>

<script setup></script>