<template>
    <main>
        <NavBar />
        <Hero />
        <Expertise/>
        <WhyUsCard/>
    </main>
</template>

<script setup>
import NavBar from '../layout/NavBar.vue';
import Hero from '../sections/servicesPage/Hero.vue'
import Expertise from '../sections/servicesPage/ExpertiseSection.vue'
import WhyUsCard from '../sections/servicesPage/WhyUseSection.vue'
</script>

<style lang="scss" scoped></style>