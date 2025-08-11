<template>
    <nav class="fixed top-0 w-full z-50 nav-blur">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="logo-text text-3xl text-black cursor-pointer">
                    w2s<span class="text-gray-400">.</span>
                </div>

                <!-- Desktop nav -->
                <div class="hidden md:flex space-x-8 text-sm font-medium items-center">
                    <a href="#home" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.home')
                    }}</a>
                    <a href="#about" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.about')
                    }}</a>
                    <a href="#work" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.work')
                    }}</a>
                    <a href="#contact" class="hover:text-gray-600 transition-colors cursor-pointer">{{ $t('nav.contact')
                    }}</a>

                    <div class="language-selector" @click.away="closeDropdown">
                        <button class="language-button" @click="toggleDropdown">
                            <span class="flag-icon">{{ selectedLanguage.flag }}</span>
                            <span>{{ selectedLanguage.name }}</span>
                            <svg class="dropdown-arrow" :class="{ 'rotate-180': dropdownOpen }" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor">
                                <polyline points="6,9 12,15 18,9" />
                            </svg>
                        </button>

                        <div class="language-dropdown" :class="{ 'dropdown-open': dropdownOpen }">
                            <div class="language-option" v-for="language in languages" :key="language.code"
                                :class="{ 'selected': language.code === selectedLanguage.code }"
                                @click="selectLanguage(language)">
                                <span class="flag-icon">{{ language.flag }}</span>
                                <span>{{ language.name }}</span>
                                <svg v-if="language.code === selectedLanguage.code" class="check-icon"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="20,6 9,17 4,12" />
                                </svg>
                            </div>
                        </div>
                    </div>
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
                        <a href="#home" @click="isOpen = false" class="menu-item">Home</a>
                        <a href="#about" @click="isOpen = false" class="menu-item">About</a>
                        <a href="#work" @click="isOpen = false" class="menu-item">Work</a>
                        <a href="#contact" @click="isOpen = false" class="menu-item">Contact</a>

                        <!-- Language selector mobile -->
                        <div class="mobile-language-selector">
                            <div class="language-option mobile">
                                <span class="flag-icon">🇫🇷</span>
                                <span>Français</span>
                            </div>
                            <div class="language-option mobile">
                                <span class="flag-icon">🇺🇸</span>
                                <span>English</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </nav>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const isOpen = ref(false)
const { locale, t } = useI18n()

const dropdownOpen = ref(false)

const languages = reactive([
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
])

const selectedLanguage = ref(languages[0])

const toggleDropdown = () => {
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
</script>

<style scoped>
.nav-blur {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.language-selector {
    position: relative;
}

.language-button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
}

.language-button:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.language-icon {
    width: 16px;
    height: 16px;
    stroke-width: 2;
}

.dropdown-arrow {
    width: 14px;
    height: 14px;
    stroke-width: 2;
    transition: transform 0.3s ease;
}

.language-selector:hover .dropdown-arrow {
    transform: rotate(180deg);
}

.language-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) scale(0.95);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    min-width: 160px;
}

.language-selector:hover .language-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}

.language-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    position: relative;
    overflow: hidden;
}

.language-option:hover {
    background: rgba(0, 0, 0, 0.06);
}

.language-option:hover::before {
    left: 100%;
}

.flag-icon {
    font-size: 16px;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Mobile Language Selector */
.mobile-language-selector {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.language-option.mobile {
    justify-content: center;
    background: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
}

.language-option.mobile:hover {
    background: rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
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

.check-icon {
    width: 16px;
    height: 16px;
    stroke-width: 2;
    color: #3b82f6;
    margin-left: auto;
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