<template>
  <div class="fixed top-4 right-4 z-50 space-y-2">
    <transition name="toast">
      <div v-if="show" :key="id"
           class="bg-white border-l-4 border-black p-4 min-w-[300px] max-w-[400px] transition-all duration-300"
           :class="{ 'opacity-100': show, 'opacity-0': !show }">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg v-if="type === 'success'" class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium text-black">
              {{ title }}
            </p>
            <p v-if="message" class="mt-1 text-sm text-gray-600">
              {{ message }}
            </p>
          </div>
          <button @click="onClose" class="ml-4 text-gray-600 hover:text-black">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  id: number
  type: 'success' | 'error'
  title: string
  message?: string
  show: boolean
  duration?: number
}>()

const emit = defineEmits(['close'])

const onClose = () => {
  emit('close', props.id)
}

const timeout = ref<number | null>(null)

watch(() => props.show, (newShow) => {
  if (newShow && props.duration) {
    timeout.value = setTimeout(() => {
      emit('close', props.id)
    }, props.duration) as unknown as number
  } else if (!newShow && timeout.value) {
    clearTimeout(timeout.value)
    timeout.value = null
  }
})

onUnmounted(() => {
  if (timeout.value) {
    clearTimeout(timeout.value)
  }
})
</script>

<style scoped>
.toast-enter-active, .toast-leave-active {
  transition: opacity 0.3s ease;
}

.toast-enter-from, .toast-leave-to {
  opacity: 0;
}

div.bg-white {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}
</style>