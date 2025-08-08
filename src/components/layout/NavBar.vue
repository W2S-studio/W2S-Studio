<template>
    <nav class="fixed top-0 w-full z-50 nav-blur">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="logo-text text-3xl text-black cursor-pointer">w2s<span class="text-gray-400">.</span></div>
                <div class="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#home" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.home') }}</a>
                    <a href="#about" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.about') }}</a>
                    <a href="#work" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.work') }}</a>
                    <a href="#contact" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.contact') }}</a>
                </div>
                <button class="md:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="css" scoped>
.nav-blur {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
</style>