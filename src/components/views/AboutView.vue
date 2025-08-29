<template>
    <main>
        <NavBar />
        <Hero :text="{
            title1: t('about.hero.title1'),
            title2: t('about.hero.title2'),
            title3: t('about.hero.title3'),
            description: t('about.hero.description'),
            button: t('about.hero.cta')
        }" />
        <OurMission />
        <OurStory/>
        <OurTools />
        <OurTeam />
        <ContactSection />
        <Footer />
    </main>
</template>


<script setup>
import NavBar from '../layout/NavBar.vue';
import Footer from '../layout/Footer.vue';
import OurTools from '../sections/aboutPage/OurTools.vue'
import Hero from '../layout/Hero.vue'
import OurMission from '../sections/aboutPage/OurMission.vue';
import ContactSection from '../sections/ContactSection.vue';
import OurTeam from '../sections/TeamSection.vue'
import OurStory from '../sections/aboutPage/OurStory.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>