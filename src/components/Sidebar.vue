<template>
  <aside
    class="w-full lg:w-[280px] bg-[#1E1E1F] rounded-2xl p-6 flex flex-col items-center shadow-xl lg:sticky lg:top-6 lg:h-fit border border-[#383838]"
  >
    <!-- Avatar -->
    <div class="bg-[#333333] p-4 mt-10 rounded-2xl">
      <img
        src="../assets/avatar.png"
        class="w-24 md:w-32 h-24 md:h-32 rounded-2xl object-cover"
        alt="avatar"
      />
    </div>

    <!-- Name -->
    <h2 class="text-xl md:text-2xl font-bold mt-4 text-center">Vincent Vullag</h2>
    <p class="text-gray-400 text-xs md:text-sm text-center">
      Programmer • Youtube Editor
    </p>

    <div
      class="mt-3 bg-[#2a2a2a] px-4 py-1 rounded-lg border border-gray-700 text-xs md:text-sm"
    >
      Web Developer
    </div>

    <!-- Divider -->
    <div class="my-6 w-full border-t border-gray-700"></div>

    <!-- Contact items -->
    <div
      class="w-full space-y-4 text-xs md:text-sm flex flex-col items-center md:items-center lg:items-start"
    >
      <div class="flex items-center space-x-3">
        <span class="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0">
          <i class="fas fa-envelope text-yellow-500 text-sm md:text-base"></i>
        </span>
        <span class="text-gray-300 truncate">vincentvullag@gmail.com</span>
      </div>

      <div class="flex items-center space-x-3">
        <span class="bg-orange-500/20 p-2 rounded-lg flex-shrink-0">
          <i class="fab fa-github text-orange-500 text-sm md:text-base"></i>
        </span>
        <a
          class="text-orange-300 truncate underline"
          href="https://github.com/vullagvs26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          >https://github.com/vullagvs26</a
        >
      </div>

      <div class="flex items-center space-x-3">
        <span class="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
          <i class="fab fa-linkedin text-blue-500 text-sm md:text-base"></i>
        </span>
        <a
          class="text-blue-300 truncate underline"
          href="https://linkedin.com/in/vullagvs26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          >https://github.com/vullagvs26</a
        >
      </div>

      <div class="flex items-center space-x-3">
        <span class="bg-red-500/20 p-2 rounded-lg flex-shrink-0">
          <i class="fas fa-location-crosshairs text-red-500 text-sm md:text-base"></i>
        </span>
        <span class="text-gray-300 truncate">Calamba, Laguna</span>
      </div>
    </div>

    <!-- Footer icons -->
    <div class="flex space-x-4 mt-auto pt-6">
      <i
        class="fab fa-twitter text-gray-500 hover:text-yellow-400 cursor-pointer text-sm md:text-base"
      ></i>
      <i
        class="fab fa-instagram text-gray-500 hover:text-yellow-400 cursor-pointer text-sm md:text-base"
      ></i>
      <i
        class="fas fa-flag text-gray-500 hover:text-yellow-400 cursor-pointer text-sm md:text-base"
      ></i>
    </div>
  </aside>
</template>

<script setup></script>
