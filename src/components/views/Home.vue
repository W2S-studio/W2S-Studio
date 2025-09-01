<template>
        <main>
                <Hero :text="{
                        title1: t('hero.line1'),
                        title2: t('hero.line2'),
                        title3: t('hero.line3'),
                        description: t('hero.description'),
                        button: t('hero.cta')
                }" />
                <AboutSection />
                <ServiceSection />
                <ProjectSection :nbproject-to-show="3" />
                <TeamSection />
                <ContactSection />
                <Footer />
        </main>

</template>

<script setup>
import NavBar from '../layout/NavBar.vue';
import Hero from '../layout/Hero.vue'
import AboutSection from '../sections/AboutSection.vue';
import ContactSection from '../sections/ContactSection.vue';
import ProjectSection from '../sections/ProjectSection.vue';
import ServiceSection from '../sections/ServiceSection.vue';
import TeamSection from '../sections/TeamSection.vue';
import Footer from '../layout/Footer.vue';

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style lang="css" scoped></style>