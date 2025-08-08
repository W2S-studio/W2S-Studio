<template>
    <button :class="[
        'cursor-pointer font-semibold hover-scale transition-all',
        // Size
        size === 'sm' ? 'px-6 py-3 text-sm' :
            size === 'lg' ? 'px-8 py-4 text-lg' :
                'px-6 py-3 text-base',

        // Variant
        black
            ? 'bg-black text-white'
            : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white',

        // Roundness
        round ? 'rounded-lg' : 'rounded-none'
    ]">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: String,
    black: Boolean,
    size: { type: String, default: 'base' },
    round: Boolean
})
</script>

<style scoped></style>
