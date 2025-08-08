<template>
    <main>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ProjectSection />
        <TeamSection />
        <ContactSection />

        <Footer />
    </main>
</template>

<script setup>
import NavBar from '../layout/NavBar.vue';
import HeroSection from '../sections/HeroSection.vue';
import AboutSection from '../sections/AboutSection.vue';
import ContactSection from '../sections/ContactSection.vue';
import ProjectSection from '../sections/ProjectSection.vue';
import ServiceSection from '../sections/ServiceSection.vue';
import TeamSection from '../sections/TeamSection.vue';
import Footer from '../layout/Footer.vue';
</script>

<style lang="css" scoped></style>