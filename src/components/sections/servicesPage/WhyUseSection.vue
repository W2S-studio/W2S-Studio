<template>
    <section class="bg-black py-16 px-6">
        <div class="max-w-7xl mx-auto px-6">
            <div class="section-reveal text-center mb-8">
                <h2 class="text-5xl md:text-6xl font-black mb-4 leading-tight text-white" data-aos="fade-up"
                    data-aos-duration="800" data-aos-delay="0">
                    {{ t('why-us.title1') }}
                    <span class="text-gray-500">{{ t('why-us.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="200">
                    {{ t('expertise.description') }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>