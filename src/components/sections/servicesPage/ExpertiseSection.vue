<template>
    <section class="py-16 px-6">
        <div class="max-w-7xl mx-auto px-6 mb-8">
            <div class="section-reveal text-center mb-16">
                <h2 class="text-5xl md:text-6xl font-black mb-4 leading-tight text-black" data-aos="fade-up"
                    data-aos-duration="800" data-aos-delay="0">
                    {{ t('expertise.title1') }}
                    <span class="text-gray-400">{{ t('expertise.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="200">
                    {{ t('expertise.description') }}
                </p>
            </div>
        </div>

        <div class="flex gap-10 flex-col md:flex-row justify-center items-center">
            <ExpertiseCard
                :text="{ title: t('expertise.card1.title'), perk1: t('expertise.card1.perk1'), perk2: t('expertise.card1.perk2'), perk3: t('expertise.card1.perk3') }">
                <svg viewBox="0 0 24 24" class="w-10 h-10 bg-black p-2 rounded" fill="none" stroke="white"
                    stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            </ExpertiseCard>
            <ExpertiseCard
                :text="{ title: t('expertise.card2.title'), perk1: t('expertise.card2.perk1'), perk2: t('expertise.card2.perk2'), perk3: t('expertise.card2.perk3') }">
                <svg viewBox="0 0 24 24" class="w-10 h-10 bg-black p-2 rounded" fill="none" stroke="white"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                </svg>
            </ExpertiseCard>
            <ExpertiseCard
                :text="{ title: t('expertise.card3.title'), perk1: t('expertise.card3.perk1'), perk2: t('expertise.card3.perk2'), perk3: t('expertise.card3.perk3') }">
                <svg viewBox="0 0 24 24" class="w-10 h-10 bg-black p-2 rounded" fill="none" stroke="white"
                    stroke-width="2" xmlns="http://www.w3.org/2000/svg">

                    <path
                        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            </ExpertiseCard>
        </div>

    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import ExpertiseCard from '../../cards/ServiceExpertiseCard.vue'
</script>

<style lang="scss" scoped></style>