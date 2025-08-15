<template>
  <button :class="[
    'cursor-pointer font-semibold transition-all box-border',
    size === 'sm' ? 'px-6 py-3 text-sm' :
      size === 'lg' ? 'px-8 py-4 text-lg' :
        'px-6 py-3 text-base',

    // Colors
    black
      ? 'bg-black text-white'
      : disableHover
        ? 'bg-white text-black'
        : 'bg-white text-black hover:bg-black hover:text-white',

    !disableHover && 'hover-scale',
    round ? 'rounded-lg' : 'rounded-none'
  ]" :style="{ border: '2px solid', borderColor: black ? 'transparent' : 'black' }">
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
 * @prop {boolean} disableHover - If true, disables all hover effects (color and scale).
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
