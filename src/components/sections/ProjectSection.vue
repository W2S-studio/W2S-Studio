<template>
    <section id="projects" class="py-16 bg-white relative max-w-7xl mx-auto px-4">
        <div class="max-w-7xl mx-auto px-6">
            <div class="section-reveal text-center mb-8">
                <h2 class="text-5xl md:text-6xl font-black mb-4 leading-tight text-black" data-aos="fade-up"
                    data-aos-duration="800" data-aos-delay="0">
                    {{ t('projects.title1') }}<br />
                    <span class="text-gray-500">{{ t('projects.title2') }}</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="700"
                    data-aos-delay="200">
                    {{ t('projects.description') }}
                </p>
            </div>
        </div>

        <div v-if="projects.length > 0" class="section-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(project, index) in projects" :key="project.id" data-aos="fade-up" :data-aos-duration="600"
                :data-aos-delay="300 + (index * 150)">
                <HomeProjectCard :project="project" />
            </div>
        </div>

        <div v-else class="section-reveal text-center" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
            <p class="text-lg text-gray-600 mb-8">
                {{ t('projects.noProjects') }}
            </p>

            <a href="#contact"> <button
                    class="bg-black text-white px-8 py-4 cursor-pointer font-semibold hover:scale-105 transition-all duration-300">
                    {{ t('projects.contactCta') }}
                </button></a>
        </div>

        <div class="section-reveal text-center mt-16" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            <button v-if="projects.length > 0"
                class="bg-black text-white px-8 py-4 font-semibold cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
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