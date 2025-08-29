<template>
    <section class="py-24 px-6">

        <div class="max-w-7xl mx-auto px-6 mb-8">
            <div class="section-reveal text-center mb-16">
                <h2 class="text-5xl md:text-6xl font-black mb-4 leading-tight text-black" data-aos="fade-up"
                    data-aos-duration="800" data-aos-delay="0">
                    {{ t('about.our-tools.title1') }}
                    <span class="text-gray-400">{{ t('about.our-tools.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="200">
                    {{ t('about.our-tools.description') }}
                </p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center md:items-start gap-20">

            <div class="flex flex-col items-center gap-6 w-[230px]">
                <div class="flex justify-center items-center w-30 h-30">
                    <img src="/src/assets/Vitejs-logo.svg.png" alt="vite logo"
                        class="max-w-full max-h-full object-contain">
                </div>
                <h3 class="text-3xl font-bold text-center min-h-[2.5rem] flex items-center">Vite</h3>
                <p class="text-center text-gray-600">{{ t('about.our-tools.card.vite') }}</p>
            </div>

            <div class="flex flex-col items-center gap-6 w-[230px]">
                <div class="flex justify-center items-center w-30 h-30">
                    <img src="/src/assets/Vue.js_Logo_2.svg.png" alt="vue logo"
                        class="max-w-full max-h-full object-contain">
                </div>
                <h3 class="text-3xl font-bold text-center min-h-[2.5rem] flex items-center">Vue.js</h3>
                <p class="text-center text-gray-600">{{ t('about.our-tools.card.vue') }}</p>
            </div>

            <div class="flex flex-col items-center gap-6 w-[230px]">
                <div class="flex justify-center items-center w-30 h-30">
                    <img src="/src/assets/Tailwind_CSS_Logo.svg.png" alt="tailwind logo"
                        class="max-w-full max-h-full object-contain">
                </div>
                <h3 class="text-3xl font-bold text-center min-h-[2.5rem] flex items-center">Tailwind CSS</h3>
                <p class="text-center text-gray-600">{{ t('about.our-tools.card.tailwind') }}</p>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>