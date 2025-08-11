<template>
  <footer class="bg-black py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <div class="flex items-center justify-center mb-4 md:mb-0">
          <img id="footer-logo" src="/src/assets/Icon.jpg" alt="w2s Studio"
            class="w-12 h-12 rounded-full hover-scale transition-all cursor-pointer" />
        </div>

        <div class="flex space-x-6">
         
          <!-- GitHub -->
          <a href="https://github.com/W2S-studio" class="group" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-white" fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 .5C5.37.5 0 5.87 0 
               12.5c0 5.28 3.438 9.747 8.205 
               11.327.6.113.82-.26.82-.577 
               0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 
               -.546-1.387-1.333-1.756-1.333-1.756 
               -1.09-.745.084-.729.084-.729 
               1.205.084 1.84 1.238 1.84 1.238 
               1.07 1.834 2.807 1.304 3.492.997 
               .108-.775.418-1.304.762-1.604 
               -2.665-.304-5.466-1.334-5.466-5.93 
               0-1.31.468-2.38 1.235-3.22 
               -.123-.304-.535-1.527.117-3.18 
               0 0 1.008-.322 3.3 1.23a11.52 11.52 
               0 0 1 3.003-.404c1.018.005 
               2.045.138 3.003.404 2.29-1.552 
               3.296-1.23 3.296-1.23 
               .653 1.653.242 2.876.119 3.18 
               .77.84 1.233 1.91 1.233 3.22 
               0 4.61-2.804 5.624-5.475 5.92 
               .43.37.823 1.102.823 2.222 
               0 1.606-.015 2.896-.015 3.286 
               0 .32.218.694.825.576 
               C20.565 22.244 24 17.778 24 
               12.5 24 5.87 18.627.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; <span id="current-year"></span> {{ t('footer.copyright') }}</p>
        <p class="mt-2 text-sm">{{ t('footer.slogan') }}</p>
      </div>
    </div>

    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="floating-complex absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
      <div class="floating-complex absolute bottom-10 right-10 w-24 h-24 border border-white"
        style="animation-delay: -3s;"></div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>