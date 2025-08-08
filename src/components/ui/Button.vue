<template>
  <button :class="[
    'cursor-pointer font-semibold transition-all',
    !disableHover && 'hover-scale', // Disable hover effect if true

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
/**
 * Props for the CustomButton component
 *
 * @prop {string} title - The button text displayed inside the button.
 * @prop {boolean} black - If true, button has black background; otherwise white.
 * @prop {'sm' | 'base' | 'lg'} size - Controls padding and font size. Defaults to 'base'.
 * @prop {boolean} round - If true, applies rounded corners to the button.
 * @prop {boolean} disableHover - If true, disables the hover-scale animation.
 */
defineProps({
  title: String,
  black: Boolean,
  size: { type: String, default: 'base' },
  round: Boolean,
  disableHover: Boolean
})
</script>

<style scoped></style>
