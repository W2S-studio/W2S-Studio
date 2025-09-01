<template>
    <main>
       
        <Hero :text="{ title1: t('service-hero.line1'), title2: t('service-hero.line2'),title3: t('service-hero.line3'), description: t('service-hero.description'), button: t('service-hero.cta') }" buttonHref="#expertise" />
        <Expertise />
        <WhyUsCard />
        <ContactSection />
        <Footer />
    </main>
</template>

<script setup>
import NavBar from '../layout/NavBar.vue';
import Hero from '../layout/Hero.vue'
import Expertise from '../sections/servicesPage/ExpertiseSection.vue'
import WhyUsCard from '../sections/servicesPage/WhyUseSection.vue'
import Footer from '../layout/Footer.vue';
import ContactSection from '../sections/ContactSection.vue';

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style lang="scss" scoped></style>