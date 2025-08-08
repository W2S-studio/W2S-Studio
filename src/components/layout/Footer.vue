<template>
  <footer class="bg-black py-16 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <div class="flex items-center justify-center mb-4 md:mb-0">
          <img id="footer-logo" src="/src/assets/Icon.jpg" alt="w2s Studio"
            class="w-12 h-12 rounded-full hover-scale transition-all cursor-pointer" />
        </div>

        <div class="flex space-x-6 text-gray-400">
          <a href="#" class="hover:text-white transition-colors">{{ t('footer.social.instagram') }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t('footer.social.twitter') }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t('footer.social.linkedin') }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t('footer.social.github') }}</a>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; <span id="current-year"></span> {{ t('footer.copyright') }}</p>
        <p class="mt-2 text-sm">{{ t('footer.slogan') }}</p>
      </div>
    </div>

    <div class="absolute inset-0 opacity-5">
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