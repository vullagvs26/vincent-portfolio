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

    <div
      class="mt-3 bg-[#2a2a2a] px-4 py-1 rounded-lg border border-gray-700 text-xs md:text-sm"
    >
      Web Developer
    </div>
    <div
      class="mt-3 bg-[#2a2a2a] px-4 py-1 rounded-lg border border-gray-700 text-xs md:text-sm"
    >
      Video Editor
    </div>

    <!-- Divider -->
    <div class="my-6 w-full border-t border-gray-700"></div>

    <!-- Contact items -->
    <div
      class="w-full space-y-4 text-xs md:text-sm flex flex-col items-center md:items-center lg:items-start"
    >
      <a href="mailto:vincentvullag@gmail.com" class="block">
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-yellow-500/20 transition"
        >
          <span class="bg-yellow-500/20 p-2 rounded-lg shrink-0">
            <i class="fas fa-envelope text-yellow-500 text-sm md:text-base"></i>
          </span>
          <span class="text-gray-300 truncate">vincentvullag@gmail.com</span>
        </div>
      </a>

      <a
        href="https://github.com/vullagvs26"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        class="block"
      >
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-orange-500/20 transition"
        >
          <span class="bg-orange-500/20 p-2 rounded-lg shrink-0">
            <i class="fab fa-github text-orange-500 text-sm md:text-base"></i>
          </span>
          <span class="truncate">vullagvs26</span>
        </div>
      </a>

      <a
        href="https://linkedin.com/in/vullagvincent"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        class="block"
      >
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-blue-500/20 transition"
        >
          <span class="bg-blue-500/20 p-2 rounded-lg shrink-0">
            <i class="fab fa-linkedin text-blue-500 text-sm md:text-base"></i>
          </span>
          <span class="truncate">vullagvincent</span>
        </div>
      </a>

      <a href="https://maps.app.goo.gl/29G2WACXWX9gcyFR9" target="_blank" class="block">
        <div
          class="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-red-500/20 transition"
        >
          <span class="bg-red-500/20 p-2 rounded-lg shrink-0">
            <i class="fas fa-location-crosshairs text-red-500 text-sm md:text-base"></i>
          </span>
          <span class="text-gray-300 truncate">Calamba, Laguna</span>
        </div>
      </a>
    </div>

    <!-- Footer icons -->
    <div class="flex items-center gap-3 mt-auto pt-6">
      <!-- TikTok -->
      <div class="h-5 w-5 md:h-6 md:w-6 flex items-center justify-center">
        <i
          class="fab fa-facebook text-gray-500 cursor-pointer text-[1rem] md:text-[1.2rem] transition-colors duration-300 hover:text-[#1877F2]"
        ></i>
      </div>

      <!-- Instagram -->
      <div class="h-5 w-5 md:h-6 md:w-6 flex items-center justify-center">
        <i
          class="fab fa-instagram text-gray-500 cursor-pointer text-[1rem] md:text-[1.2rem] transition-all duration-300 hover:text-transparent hover:bg-linear-to-tr hover:from-[#F58529] hover:via-[#D62976] hover:to-[#4F5BD5] hover:bg-clip-text"
        ></i>
      </div>

      <!-- Philippine Flag -->
      <img
        src="/src/assets/ph.png"
        class="h-5 w-5 md:h-6 md:w-6 rounded-full shadow-md hover:scale-110 transition transform"
      />
    </div>
  </aside>
</template>

<script setup></script>
