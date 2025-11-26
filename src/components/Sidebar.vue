<template>
  <aside
    class="w-full lg:w-[280px] bg-[#1E1E1F] rounded-2xl p-6 flex flex-col items-start lg:items-center <!-- left by default, center on large --> shadow-xl border border-[#383838]"
  >
    <!-- Profile Section -->
    <div
      class="flex flex-col md:flex-row lg:flex-col w-full items-center md:items-start lg:items-center gap-4"
    >
      <!-- Avatar -->
      <div class="bg-[#333333] p-4 rounded-3xl mt-4 shrink-0">
        <img
          src="../assets/avatar.png"
          class="w-24 h-24 rounded-2xl object-cover"
          alt="avatar"
        />
      </div>

      <!-- Name + Job -->
      <div
        class="flex flex-col mt-4 md:mt-10 lg:mt-4 text-center md:text-left lg:text-center"
      >
        <h2 class="text-2xl font-semibold text-white">Vincent Vullag</h2>

        <div
          class="flex gap-2 mt-3 flex-wrap justify-center md:justify-start lg:justify-center"
        >
          <span class="bg-[#2a2a2a] px-4 py-1 rounded-lg text-xs md:text-sm">
            Web Developer
          </span>
          <span class="bg-[#2a2a2a] px-4 py-1 rounded-lg text-xs md:text-sm">
            Youtube Editor
          </span>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="my-6 w-full border-t border-[#383838]"></div>

    <!-- Dropdown for mobile only -->
    <div class="md:hidden w-full">
      <button
        @click="isContactOpen = !isContactOpen"
        class="absolute top-8 right-4 flex items-center justify-center gap-2 px-3 py-2 rounded-tr-lg rounded-bl-lg bg-[#2a2a2a] hover:bg-[#383838] transition text-sm text-gray-300"
      >
        <span>{{ isContactOpen ? "Hide" : "Show" }} Contact</span>
      </button>

      <!-- Dropdown content -->
      <div v-if="isContactOpen" class="mt-4 space-y-3 text-xs flex flex-col items-start">
        <a href="mailto:vincentvullag@gmail.com" class="block w-full">
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-yellow-500/20 transition"
          >
            <span class="bg-yellow-500/20 p-2 rounded-lg shrink-0">
              <i class="fas fa-envelope text-yellow-500 text-xs"></i>
            </span>
            <span class="text-gray-300 truncate text-xs">vincentvullag@gmail.com</span>
          </div>
        </a>

        <a
          href="https://github.com/vullagvs26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="block w-full"
        >
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-orange-500/20 transition"
          >
            <span class="bg-orange-500/20 p-2 rounded-lg shrink-0">
              <i class="fab fa-github text-orange-500 text-xs"></i>
            </span>
            <span class="truncate text-xs">vullagvs26</span>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/vullagvincent"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="block w-full"
        >
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-blue-500/20 transition"
          >
            <span class="bg-blue-500/20 p-2 rounded-lg shrink-0">
              <i class="fab fa-linkedin text-blue-500 text-xs"></i>
            </span>
            <span class="truncate text-xs">vullagvincent</span>
          </div>
        </a>

        <a
          href="https://maps.app.goo.gl/29G2WACXWX9gcyFR9"
          target="_blank"
          class="block w-full"
        >
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-red-500/20 transition"
          >
            <span class="bg-red-500/20 p-2 rounded-lg shrink-0">
              <i class="fas fa-location-crosshairs text-red-500 text-xs"></i>
            </span>
            <span class="text-gray-300 truncate text-xs">Calamba, Laguna</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Dropdown for md screens (tablet only) -->
    <div class="hidden md:block lg:hidden w-full">
      <button
        @click="isContactOpen = !isContactOpen"
        class="absolute top-16 right-6 flex items-center justify-center gap-2 px-3 py-2 rounded-tr-xl rounded-bl-xl bg-[#2a2a2a] hover:bg-[#383838] transition text-sm text-gray-300"
      >
        <span>{{ isContactOpen ? "Hide" : "Show" }} Contact</span>
      </button>

      <!-- Dropdown content -->
      <div v-if="isContactOpen" class="space-y-3 text-xs flex flex-col items-start">
        <a href="mailto:vincentvullag@gmail.com" class="block w-full">
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-yellow-500/20 transition"
          >
            <span class="bg-yellow-500/20 p-2 rounded-lg shrink-0">
              <i class="fas fa-envelope text-yellow-500 text-xs"></i>
            </span>
            <span class="text-gray-300 truncate text-xs">vincentvullag@gmail.com</span>
          </div>
        </a>

        <a
          href="https://github.com/vullagvs26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="block w-full"
        >
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-orange-500/20 transition"
          >
            <span class="bg-orange-500/20 p-2 rounded-lg shrink-0">
              <i class="fab fa-github text-orange-500 text-xs"></i>
            </span>
            <span class="truncate text-xs">vullagvs26</span>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/vullagvincent"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="block w-full"
        >
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-blue-500/20 transition"
          >
            <span class="bg-blue-500/20 p-2 rounded-lg shrink-0">
              <i class="fab fa-linkedin text-blue-500 text-xs"></i>
            </span>
            <span class="truncate text-xs">vullagvincent</span>
          </div>
        </a>

        <a
          href="https://maps.app.goo.gl/29G2WACXWX9gcyFR9"
          target="_blank"
          class="block w-full"
        >
          <div
            class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-red-500/20 transition"
          >
            <span class="bg-red-500/20 p-2 rounded-lg shrink-0">
              <i class="fas fa-location-crosshairs text-red-500 text-xs"></i>
            </span>
            <span class="text-gray-300 truncate text-xs">Calamba, Laguna</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Contact items - Shown always on lg screens (laptop and big screens) -->
    <div class="hidden lg:flex w-full space-y-3 text-xs flex-col items-start">
      <a href="mailto:vincentvullag@gmail.com" class="block w-full">
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-yellow-500/20 transition"
        >
          <span class="bg-yellow-500/20 p-2 rounded-lg shrink-0">
            <i class="fas fa-envelope text-yellow-500 text-xs"></i>
          </span>
          <span class="text-gray-300 truncate text-xs">vincentvullag@gmail.com</span>
        </div>
      </a>

      <a
        href="https://github.com/vullagvs26"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        class="block w-full"
      >
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-orange-500/20 transition"
        >
          <span class="bg-orange-500/20 p-2 rounded-lg shrink-0">
            <i class="fab fa-github text-orange-500 text-xs"></i>
          </span>
          <span class="truncate text-xs">vullagvs26</span>
        </div>
      </a>

      <a
        href="https://linkedin.com/in/vullagvincent"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        class="block w-full"
      >
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-blue-500/20 transition"
        >
          <span class="bg-blue-500/20 p-2 rounded-lg shrink-0">
            <i class="fab fa-linkedin text-blue-500 text-xs"></i>
          </span>
          <span class="truncate text-xs">vullagvincent</span>
        </div>
      </a>

      <a
        href="https://maps.app.goo.gl/29G2WACXWX9gcyFR9"
        target="_blank"
        class="block w-full"
      >
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-red-500/20 transition"
        >
          <span class="bg-red-500/20 p-2 rounded-lg shrink-0">
            <i class="fas fa-location-crosshairs text-red-500 text-xs"></i>
          </span>
          <span class="text-gray-300 truncate text-xs">Calamba, Laguna</span>
        </div>
      </a>
    </div>

    <!-- Footer icons -->
    <div class="flex items-center gap-3 mt-auto pt-6">
      <!-- Facebook -->
      <a
        href="https://www.facebook.com/share/1FLxv7xJJo/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="h-5 w-5 md:h-6 md:w-6 flex items-center justify-center">
          <i
            class="fab fa-facebook text-gray-500 cursor-pointer text-[1rem] md:text-[1.2rem] transition-colors duration-300 hover:text-[#1877F2]"
          ></i>
        </div>
      </a>

      <!-- Instagram -->
      <a
        href="https://www.instagram.com/vullag.v?igsh=NTlqOGZneTNuem80&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="h-5 w-5 md:h-6 md:w-6 flex items-center justify-center">
          <i
            class="fab fa-instagram text-gray-500 cursor-pointer text-[1rem] md:text-[1.2rem] transition-all duration-300 hover:text-transparent hover:bg-linear-to-tr hover:from-[#F58529] hover:via-[#D62976] hover:to-[#4F5BD5] hover:bg-clip-text"
          ></i>
        </div>
      </a>

      <!-- Philippine Flag -->
      <a
        href="https://maps.app.goo.gl/CPLsNaTCSe158QN37"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/src/assets/ph.png"
          alt="Philippines"
          class="h-5 w-5 md:h-6 md:w-6 rounded-full shadow-md hover:scale-110 transition transform"
        />
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const isContactOpen = ref(false);
</script>
