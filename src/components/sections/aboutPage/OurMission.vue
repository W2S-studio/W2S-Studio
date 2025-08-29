<template>
    <section id="mission" class="bg-white  py-24 px-6">
        <div>
            <div class="max-w-7xl mx-auto px-6 mb-8">
                <div class="section-reveal text-center mb-16">
                    <h2 class="text-5xl md:text-6xl font-black mb-4 leading-tight text-black" data-aos="fade-up"
                        data-aos-duration="800" data-aos-delay="0">
                        {{ t('about.our-mission.title1') }}
                        <span class="text-gray-400">{{ t('about.our-mission.title2') }}</span>
                    </h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto mt-10" data-aos="fade-up" data-aos-duration="700"
                        data-aos-delay="200">
                        Donner une voix digitale puissante aux entreprises locales qui font battre le cœur de notre région
                    </p>
                </div>
            </div>


        </div>


    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="css" scoped></style>