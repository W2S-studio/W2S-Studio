<template>
    <nav class="fixed top-0 w-full z-50 nav-blur">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="logo-text text-3xl text-black cursor-pointer">
                    w2s<span class="text-gray-400">.</span>
                </div>


                </div>
            </transition>
        </div>
    </nav>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()
const isOpen = ref(false)

</script>

<style scoped>
.nav-blur {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

}
</style>