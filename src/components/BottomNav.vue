<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-[#282829]/80 backdrop-blur-md border-t border-[#383838] rounded-t-3xl px-6 py-4 flex justify-center gap-10 lg:hidden">
    <router-link to="/" v-slot="{ isActive }">
      <button
        :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        class="text-sm md:text-lg transition-colors"
      >
        About
      </button>
    </router-link>

    <router-link to="/resume" v-slot="{ isActive }">
      <button
        :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        class="text-sm md:text-lg transition-colors"
      >
        Resume
      </button>
    </router-link>

    <router-link to="/portfolio" v-slot="{ isActive }">
      <button
        :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        class="text-sm md:text-lg transition-colors"
      >
        Portfolio
      </button>
    </router-link>
  </nav>
</template>

<script setup></script>