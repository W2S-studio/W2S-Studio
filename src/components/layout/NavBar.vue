<template>
    <nav class="fixed top-0 w-full z-50 nav-blur">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="logo-text text-3xl text-black cursor-pointer">
                    w2s<span class="text-gray-400">.</span>
                </div>

                <!-- Desktop nav -->
                <div class="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#home" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.home') }}</a>
                    <a href="#about" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.about') }}</a>
                    <a href="#work" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.work') }}</a>
                    <a href="#contact" class="hover:text-gray-600 transition-colors cursor-pointer">{{ t('nav.contact') }}</a>
                </div>

                <!-- Burger avec animation -->
                <button class="md:hidden burger-button" @click="isOpen = !isOpen">
                    <div class="burger-icon">
                        <span class="burger-line" :class="{ 'burger-line-1-open': isOpen }"></span>
                        <span class="burger-line" :class="{ 'burger-line-2-open': isOpen }"></span>
                        <span class="burger-line" :class="{ 'burger-line-3-open': isOpen }"></span>
                    </div>
                </button>
            </div>

            <!-- Mobile menu avec transition -->
            <transition name="menu">
                <div v-show="isOpen" class="md:hidden mobile-menu">
                    <div class="flex flex-col items-center gap-4 mt-4 text-sm font-medium p-4 rounded">
                        <a href="#home" @click="isOpen = false" class="menu-item">{{ t('nav.home') }}</a>
                        <a href="#about" @click="isOpen = false" class="menu-item">{{ t('nav.about') }}</a>
                        <a href="#work" @click="isOpen = false" class="menu-item">{{ t('nav.work') }}</a>
                        <a href="#contact" @click="isOpen = false" class="menu-item">{{ t('nav.contact') }}</a>
                    </div>
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
</script>

<style scoped>
.nav-blur {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

/* Animation du burger */
.burger-button {
    padding: 8px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.burger-button:hover {
    background: rgba(0, 0, 0, 0.05);
}

.burger-icon {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.burger-line {
    width: 100%;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-origin: center;
}

/* Animation hamburger vers X */
.burger-line-1-open {
    transform: rotate(45deg) translate(6px, 6px);
}

.burger-line-2-open {
    opacity: 0;
    transform: scaleX(0);
}

.burger-line-3-open {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Animation du menu mobile */
.mobile-menu {
    overflow: hidden;
}

.menu-enter-active,
.menu-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.menu-enter-from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
    max-height: 0;
}

.menu-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
    max-height: 300px;
}

.menu-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
    max-height: 300px;
}

.menu-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
    max-height: 0;
}

/* Animation des items du menu */
.menu-item {
    transition: all 0.2s ease;
    padding: 8px 16px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
}

.menu-item:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
}

.menu-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
}

.menu-item:hover::before {
    left: 100%;
}

[v-cloak] {
    display: none;
}
</style>