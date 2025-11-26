<template>
  <div class="min-h-screen bg-[#121212] text-white">
    <div class="flex justify-center px-4 md:px-6 pt-8 md:pt-16 pb-20">
      <div class="w-full max-w-7xl">
        
        <!-- Sidebar - Always visible at top on mobile/tablet, hidden on large screens -->
        <div class="lg:hidden mb-8">
          <Sidebar />
        </div>

        <div class="flex w-full">
          <!-- Sidebar - Fixed on large screens only -->
          <div class="hidden lg:block w-[280px] shrink-0">
            <div class="fixed top-16 w-[280px]">
              <Sidebar />
            </div>
          </div>

          <!-- Main content - No gap, no padding -->
          <div class="flex-1 min-w-0">
            <router-view />
            
            <!-- Footer -->
            <Footer />
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
</script>