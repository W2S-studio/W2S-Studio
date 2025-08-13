<template>
    <nav class="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-black/5">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="text-3xl text-black cursor-pointer select-none">
                    w2s<span class="text-gray-400">.</span>
                </div>

                <!-- Desktop nav -->
                <div v-if="!isOpen" class="hidden md:flex space-x-8 text-sm font-medium items-center">
                    <a href="#home" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.home') }}</a>
                    <a href="#about" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.about') }}</a>
                    <a href="#work" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.work') }}</a>
                    <a href="#contact" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.contact') }}</a>

                    <div class="relative">
                        <button 
                            class="flex items-center gap-1.5 px-3 py-2 bg-black/5 border border-black/10 text-sm font-medium text-gray-700 cursor-pointer transition-all backdrop-blur-sm rounded"
                            @click="toggleDropdown"
                        >
                            <span>{{ selectedLanguage.code }}</span>
                            <svg class="w-3.5 h-3.5 transition-transform duration-300" :class="{ 'rotate-180': dropdownOpen }" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </button>

                        <div v-if="dropdownOpen" ref="languageDropdown" class="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-lg border border-black/10 p-2 rounded shadow-lg min-w-[160px] z-50 transition-all"
                            :class="{ 'scale-100 opacity-100': dropdownOpen, 'scale-95 opacity-0': !dropdownOpen }">
                            <div class="flex flex-col">
                                <div class="flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors hover:bg-black/5 relative"
                                    v-for="language in languages" :key="language.code"
                                    :class="{ 'font-semibold': language.code === selectedLanguage.code }"
                                    @click="selectLanguage(language)">
                                    <span>{{ language.name }}</span>
                                    <svg v-if="language.code === selectedLanguage.code" class="absolute right-2 w-4 h-4 stroke-2 text-blue-400"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Burger avec animation -->
                <button class="md:hidden p-2 rounded transition hover:bg-black/5" @click="isOpen = !isOpen">
                    <div class="w-6 h-4 flex flex-col justify-between relative">
                        <span class="block h-0.5 w-full bg-black rounded transition-all duration-300"
                              :class="{ 'rotate-45 translate-y-1.5': isOpen }"></span>
                        <span class="block h-0.5 w-full bg-black rounded transition-all duration-300"
                              :class="{ 'opacity-0 scale-x-0': isOpen }"></span>
                        <span class="block h-0.5 w-full bg-black rounded transition-all duration-300"
                              :class="{ '-rotate-45 -translate-y-1.5': isOpen }"></span>
                    </div>
                </button>
            </div>

            <!-- Mobile menu avec transition -->
            <Teleport to="body">
                <transition name="menu">
                    <div
                        v-show="isOpen"
                        class="fixed inset-0 z-[100] bg-gray-100 flex flex-col"
                    >
                        <div class="flex justify-between items-center px-6 py-4">
                            <div class="text-3xl text-black cursor-pointer font select-none">
                                w2s<span class="text-gray-400">.</span>
                            </div>
                            <button class="p-2 rounded transition hover:bg-black/5" @click="isOpen = false">
                                <div class="w-6 h-4 flex flex-col justify-between relative">
                                    <span class="block h-0.5 w-full bg-black rounded transition-all duration-300"
                                        :class="{ 'rotate-45 translate-y-1.5': isOpen }"></span>
                                    <span class="block h-0.5 w-full bg-black rounded transition-all duration-300"
                                        :class="{ 'opacity-0 scale-x-0': isOpen }"></span>
                                    <span class="block h-0.5 w-full bg-black rounded transition-all duration-300"
                                        :class="{ '-rotate-45 -translate-y-1.5': isOpen }"></span>
                                </div>
                            </button>
                        </div>
                        <div class="flex flex-col items-center gap-8 flex-1 justify-center text-lg font-semibold">
                            <a href="#home" @click="isOpen = false" class="relative rounded-md overflow-hidden px-2 py-4 transition-all hover:bg-black/5 hover:-translate-y-0.5">{{ $t('nav.home') }}</a>
                            <a href="#about" @click="isOpen = false" class="relative rounded-md overflow-hidden px-2 py-4 transition-all hover:bg-black/5 hover:-translate-y-0.5">{{ $t('nav.about') }}</a>
                            <a href="#work" @click="isOpen = false" class="relative rounded-md overflow-hidden px-2 py-4 transition-all hover:bg-black/5 hover:-translate-y-0.5">{{ $t('nav.work') }}</a>
                            <a href="#contact" @click="isOpen = false" class="relative rounded-md overflow-hidden px-2 py-4 transition-all hover:bg-black/5 hover:-translate-y-0.5">{{ $t('nav.contact') }}</a>
                        </div>
                        <div class="flex flex-col gap-2 w-full mt-4 pt-4 border-t border-black/10 px-6 pb-6">
                            <div class="flex items-center justify-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors bg-black/5 hover:bg-black/9 relative"
                                v-for="language in languages" :key="language.code"
                                :class="{ 'font-semibold': language.code === selectedLanguage.code }"
                                @click="selectLanguage(language)">
                                <span class="mx-auto" :class="{ 'mr-auto': language.code === selectLanguage.code}">{{ language.name }}</span>
                                <svg v-if="language.code === selectedLanguage.code" class="absolute right-2 w-4 h-4 stroke-2 text-blue-400"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="20,6 9,17 4,12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </transition>
            </Teleport>
        </div>
    </nav>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, reactive, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const isOpen = ref(false);
let scrollY = 0;
const languageDropdownRef = useTemplateRef('languageDropdown');
const { locale, t } = useI18n();

const dropdownOpen = ref(false);

const languages = reactive([
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
]);

const selectedLanguage = ref(languages[0]);

const toggleDropdown = () => {
    console.log('Toggle dropdown', dropdownOpen.value)
    dropdownOpen.value = !dropdownOpen.value
}

const closeDropdown = () => {
    dropdownOpen.value = false
}

const selectLanguage = (language) => {
    selectedLanguage.value = language
    dropdownOpen.value = false
    console.log('Langue sélectionnée:', language.code)
    locale.value = language.code;
}

onClickOutside(languageDropdownRef, closeDropdown);

watch(isOpen, (value) => {
    if (value) {
        scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
    }
});
</script>

<style scoped>
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

.menu-enter-active,
.menu-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.menu-enter-from {
    opacity: 0;
    transform: translateX(-20px) scale(1);
    max-width: 0;
}

.menu-enter-to {
    opacity: 1;
    transform: translateX(0) scale(1);
    max-width: 100vw;
}

.menu-leave-from {
    opacity: 1;
    transform: translateX(0) scale(1);
    max-width: 100vw;
}

.menu-leave-to {
    opacity: 0;
    transform: translateX(-10px) scale(1);
    max-width: 0;
}
</style>