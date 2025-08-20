<template>
    <main>
        <NavBar />
        <Hero />
        <Expertise/>
        <WhyUsCard/>
        <ContactSection/>
        <Footer/>
    </main>
</template>

<script setup>
import NavBar from '../layout/NavBar.vue';
import Hero from '../sections/servicesPage/Hero.vue'
import Expertise from '../sections/servicesPage/ExpertiseSection.vue'
import WhyUsCard from '../sections/servicesPage/WhyUseSection.vue'
import Footer from '../layout/Footer.vue';
import ContactSection from '../sections/ContactSection.vue';
</script>

<style lang="scss" scoped></style>