<template>
  <aside
    class="w-[300px] bg-[#1a1a1a] rounded-2xl p-6 flex flex-col items-center shadow-xl sticky top-6 h-fit border border-gray-800"
  >
    <!-- Avatar -->
    <img
      src="../assets/avatar.png"
      class="w-32 h-32 rounded-2xl object-cover shadow-md"
      alt="avatar"
    />

    <!-- Name -->
    <h2 class="text-2xl font-bold mt-4">Vincent Vullag</h2>
    <p class="text-gray-400 text-sm">Programmer • Editor</p>

    <!-- Role Badge -->
    <div class="mt-3 bg-[#2a2a2a] px-4 py-1 rounded-lg border border-gray-700 text-sm">
      Web Developer
    </div>

    <!-- Divider -->
    <div class="my-6 w-full border-t border-gray-700"></div>

    <!-- Contact items -->
    <div class="w-full space-y-4 text-sm">
      <div class="flex items-center space-x-3">
        <span class="bg-yellow-500/20 p-2 rounded-lg">
          <i class="fas fa-envelope text-yellow-500"></i>
        </span>
        <span class="text-gray-300">vullag.v24@gmail.com</span>
      </div>

      <div class="flex items-center space-x-3">
        <span class="bg-orange-500/20 p-2 rounded-lg">
          <i class="fab fa-github text-orange-500"></i>
        </span>
        <span class="text-gray-300">vullag</span>
      </div>

      <div class="flex items-center space-x-3">
        <span class="bg-blue-500/20 p-2 rounded-lg">
          <i class="fab fa-linkedin text-blue-500"></i>
        </span>
        <span class="text-gray-300">Vincent Vullag</span>
      </div>
    </div>

    <!-- Footer icons -->
    <div class="flex space-x-4 mt-auto pt-6">
      <i class="fab fa-twitter text-gray-500 hover:text-yellow-400 cursor-pointer"></i>
      <i class="fab fa-instagram text-gray-500 hover:text-yellow-400 cursor-pointer"></i>
      <i class="fas fa-flag text-gray-500 hover:text-yellow-400 cursor-pointer"></i>
    </div>
  </aside>
</template>

<script setup></script>