<template>
    <nav class="fixed top-0 w-full z-50 nav-blur">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="logo-text text-3xl text-black cursor-pointer">
                    w2s<span class="text-gray-400">.</span>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#home" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.home') }}</a>
                    <a href="#about" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.about')
                    }}</a>
                    <a href="#work" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.work') }}</a>
                    <a href="#contact" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.contact')
                    }}</a>
                </div>

                <!-- Hamburger Button -->
                <button class="md:hidden" @click="toggleMenu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu with Transition -->
            <transition name="slide">
                <div v-if="isOpen"
                    class="md:hidden mt-4 space-y-4 text-sm font-medium text-center bg-white p-4 rounded shadow transition-all">
                    <a href="#home" class="block hover:text-gray-600" @click="closeMenu">{{ t('nav.home') }}</a>
                    <a href="#about" class="block hover:text-gray-600" @click="closeMenu">{{ t('nav.about') }}</a>
                    <a href="#work" class="block hover:text-gray-600" @click="closeMenu">{{ t('nav.work') }}</a>
                    <a href="#contact" class="block hover:text-gray-600" @click="closeMenu">{{ t('nav.contact') }}</a>
                </div>
            </transition>
        </div>
    </nav>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()
const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}

const closeMenu = () => {
    isOpen.value = false
}
</script>

<style lang="css" scoped>
.nav-blur {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

/* Smooth slide-down animation */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>