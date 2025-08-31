<template>
    <main>
        <NavBar :active-index=2 />
        <Hero :text="{ title1: t('project-hero.line1'), title2: t('project-hero.line2'),title3: t('project-hero.line3'), description: t('project-hero.description'), button: t('project-hero.cta') }"  buttonHref="#projects"/>
        <ProjectSection/>
        <ContactSection />
        <Footer />
    </main>
</template>

<script setup>
import NavBar from '../layout/NavBar.vue';
import Hero from '../layout/Hero.vue'
import ProjectSection from '../sections/ProjectSection.vue';
import Footer from '../layout/Footer.vue';
import ContactSection from '../sections/ContactSection.vue';

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style lang="scss" scoped></style>