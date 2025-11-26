<template>
  <nav
      class="absolute top-0 right-6 flex justify-end md:gap-10 text-sm md:text-lg bg-[#282829] border border-[#383838] rounded-tr-2xl rounded-bl-2xl px-6 py-4"
    >
      <router-link to="/" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        >
          About
        </button>
      </router-link>

      <router-link to="/resume" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        >
          Resume
        </button>
      </router-link>
      <router-link to="/portfolio" v-slot="{ isActive }">
        <button
          :class="isActive ? 'text-[rgb(255,219,112)]' : 'text-gray-400 hover:text-[rgb(255,219,112)]'"
        >
          Portfolio
        </button>
      </router-link>
    </nav>
</template>

<script setup></script>
