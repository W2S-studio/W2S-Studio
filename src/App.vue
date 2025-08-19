<template>
  <nav class="flex space-x-4 p-4 bg-gray-100">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/projects">Projects</router-link>
  </nav>

  <router-view />
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped></style>
