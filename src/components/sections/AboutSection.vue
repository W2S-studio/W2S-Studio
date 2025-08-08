<template>
    <section id="about" class="py-32 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="section-reveal grid lg:grid-cols-2 gap-20 items-center">
                <div class="parallax-scroll">
                    <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight">
                        {{ $t('about.title1') }}<br>
                        {{ $t('about.title2') }}<br>
                        <span class="text-gray-400">{{ $t('about.title3') }}</span>
                    </h2>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        {{ $t('about.description') }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <Button :title="t('about.btnProcess')" :black="true" />

                        <Button :title="t('about.btnWork')" :black="false" />

                    </div>
                </div>
                <div class="relative parallax-scroll" data-speed="0.1">

                    <div
                        class="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-150 rounded-3xl relative overflow-hidden flex items-center justify-center">
                        <img id="about-logo" src="/src/assets/Icon.jpg" alt="w2s Studio"
                            class="w-48 h-48 object-contain rounded-2xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import Button from '../ui/Button.vue';
</script>

<style lang="scss" scoped></style>