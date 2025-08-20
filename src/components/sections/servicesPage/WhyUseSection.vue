<template>
    <section class="bg-black py-24 px-6">
        <div class="max-w-7xl mx-auto px-6 mb-16">
            <div class="section-reveal text-center mb-8">
                <h2 class="text-5xl md:text-6xl font-black mb-4 leading-tight text-white" data-aos="fade-up"
                    data-aos-duration="800" data-aos-delay="0">
                    {{ t('why-us.title1') }}
                    <span class="text-gray-500">{{ t('why-us.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-400 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="200">
                    {{ t('why-us.description') }}
                </p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row max-w-7xl mx-auto px-6 items-center justify-center gap-20  ">
            <div class="flex flex-col gap-10">
                <div class="text-white flex gap-5">
                    <div
                        class="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black font-semibold shrink-0">
                        1
                    </div>
                    <div>
                        <h3 class="font-semibold text-2xl">{{ $t('why-us.perk.perk1.title') }}</h3>
                        <p class="text-gray-400">{{ $t('why-us.perk.perk1.description') }}</p>
                    </div>
                </div>
                <div class="text-white flex gap-5">
                    <div
                        class="w-8 h-8 font-semibold flex items-center justify-center rounded-full bg-white text-black shrink-0">
                        2
                    </div>
                    <div>
                        <h3 class="font-semibold text-2xl">{{ $t('why-us.perk.perk2.title') }}</h3>
                        <p class="text-gray-400">{{ $t('why-us.perk.perk2.description') }}</p>
                    </div>
                </div>
                <div class="text-white flex gap-5">
                    <div
                        class="w-8 h-8 font-semibold flex items-center justify-center rounded-full bg-white text-black shrink-0">
                        3
                    </div>
                    <div>
                        <h3 class="font-semibold text-2xl">{{ $t('why-us.perk.perk3.title') }}</h3>
                        <p class="text-gray-400">{{ $t('why-us.perk.perk3.description') }}</p>
                    </div>
                </div>
                <div class="text-white flex gap-5">
                    <div
                        class="w-8 h-8 font-semibold flex items-center justify-center rounded-full bg-white text-black shrink-0">
                        4
                    </div>
                    <div>
                        <h3 class="font-semibold text-2xl">{{ $t('why-us.perk.perk4.title') }}</h3>
                        <p class="text-gray-400">{{ $t('why-us.perk.perk4.description') }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row md:flex-col gap-5 justify-center">
                <div>
                    <h3 class="text-white text-6xl font-bold text-center">
                        100%
                    </h3>
                    <h4 class="text-gray-400 text-center text-3xl">{{ $t('why-us.stats.stat1') }}</h4>
                </div>
                <div>
                    <h3 class="text-white text-6xl font-bold text-center">
                        24/24
                    </h3>
                    <h4 class="text-gray-400 text-center text-3xl">{{ $t('why-us.stats.stat2') }}</h4>
                </div>
                <div>
                    <h3 class="text-white text-6xl font-bold text-center">
                        0
                    </h3>
                    <h4 class="text-gray-400 text-center text-3xl">{{ $t('why-us.stats.stat1') }}</h4>
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