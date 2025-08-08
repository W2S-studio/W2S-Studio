<template>
    <section id="work" class="py-32 bg-black relative">
        <div class="max-w-7xl mx-auto px-6">
            <div class="section-reveal text-center mb-20">
                <h2 class="text-4xl sm:text-6xl font-black text-white mb-8">
                    {{ t('work.title1') }}<br />
                    <span class="text-gray-500">{{ t('work.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                    {{ t('work.description') }}
                </p>
            </div>

            <div class="section-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <HomeServiceCard :text="{
                    title: t('work.customWebsites.title'),
                    description: t('work.customWebsites.description')
                }">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7L12 2z" />
                    </svg>
                </HomeServiceCard>

                <HomeServiceCard :text="{
                    title: t('work.performance.title'),
                    description: t('work.performance.description')
                }">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 2v11h3v9l7-12h-4l3-8z" />
                    </svg>
                </HomeServiceCard>

                <HomeServiceCard :text="{
                    title: t('work.webApps.title'),
                    description: t('work.webApps.description')
                }">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                </HomeServiceCard>

            </div>
        </div>
    </section>
</template>

<script setup>

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import HomeServiceCard from '../cards/HomeServiceCard.vue';
</script>

<style lang="css" scoped></style>