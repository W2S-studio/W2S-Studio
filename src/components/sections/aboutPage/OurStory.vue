<template>
    <section class="bg-black py-24 px-6">

        <div class="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row gap-10 items-center ">

            <div class="section-reveal text-center md:text-start mb-8 md:mb-16 w-full md:w-1/2">
                <h2 class="text-5xl md:text-6xl font-black mb-4 leading-tight text-white" data-aos="fade-up"
                    data-aos-duration="800" data-aos-delay="0">
                    {{ t('about.our-story.title1') }}
                    <span class="text-gray-400">{{ t('about.our-story.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-400 max-w-3xl mt-10" data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="200">
                    {{ t('about.our-story.description') }}
                </p>
            </div>


            <div class="w-full md:w-1/2 flex justify-center md:justify-end">
                <div class="aspect-[4/3] w-full max-w-lg">
                    <img src="../../../assets/C8E1E11F-701B-4DBD-9E50-3CF3177C4813_1_102_o.jpeg" alt="our story" class="w-full h-full rounded-xl shadow-lg object-cover">
                </div>
            </div>

        </div>


    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>