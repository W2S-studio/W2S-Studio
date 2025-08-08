<template>
    <section id="projects" class="py-32 bg-white relative max-w-7xl mx-auto px-6">
        <div class="max-w-7xl mx-auto px-6">
            <div class="section-reveal text-center mb-20">
                <h2 class="text-4xl sm:text-6xl font-black mb-8 leading-tight text-black">
                    {{ t('projects.title1') }}<br />
                    <span class="text-gray-500">{{ t('projects.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    {{ t('projects.description') }}
                </p>
            </div>
        </div>

        <div v-if="projects.length > 0" class="section-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HomeProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>

        <div v-else class="section-reveal text-center">
            <p class="text-lg text-gray-600 mb-8">
                {{ t('projects.noProjects') }}
            </p>
            <button class="bg-black text-white px-8 py-4 font-semibold hover:scale-105 transition-all">
                {{ t('projects.contactCta') }}
            </button>
        </div>

        <div class="section-reveal text-center mt-16">
            <button class="bg-black text-white px-8 py-4 font-semibold hover-scale transition-all">
                {{ t('projects.viewAll') }}
            </button>
            <p class="mt-4 text-gray-500 text-sm">
                {{ t('projects.bottomCta') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { projects } from '../../data/Project';
import HomeProjectCard from '../cards/HomeProjectCard.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style lang="css" scoped>
.profile-image {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
}
</style>