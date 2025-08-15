<template>
    <div class="sleek-card p-8 h-full">
        <div class="w-12 h-12 bg-white mb-6 flex items-center justify-center">
           <slot/>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-white">{{ text.title }}</h3>
        <p class="text-gray-300">{{ text.description }}</p>
    </div>
</template>

<script setup>
defineProps({
    text:{
        title: String,
        description: String
    }
})
</script>

<style lang="css" scoped>
.hover-scale {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-scale:hover {
    transform: scale(1.05);
}

.sleek-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.sleek-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}
</style>