<template>
    <section id="about" class="py-32 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="section-reveal grid lg:grid-cols-2 gap-20 items-center">
                <div class="parallax-scroll" data-aos="fade-up" data-aos-duration="700" data-speed="0.2">
                    <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight text-center lg:text-start"
                        data-aos="fade-up" data-aos-duration="700" data-aos-delay="0">
                        {{ $t('about.title1') }}<br>
                        {{ $t('about.title2') }}<br>
                        <span class="text-gray-400">{{ $t('about.title3') }}</span>
                    </h2>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed text-center lg:text-start" data-aos="fade-up"
                        data-aos-duration="700" data-aos-delay="200">
                        {{ $t('about.description') }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start"
                        data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
                        <a href="#work"><Button :title="t('about.btnProcess')" :black="true" /></a>
                        <a href="" @click.prevent="$router.push('/services')"><Button :title="t('about.btnWork')" :black="false" /></a>
                    </div>

                </div>
                <div data-aos="zoom-in" data-aos-duration="400" data-aos-delay="0">
                    <div
                        class="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-150 rounded-3xl relative overflow-hidden flex items-center justify-center">
                        <img id="about-logo" src="/src/assets/Icon.jpg" alt="w2s Studio"
                            class="w-48 h-48 object-contain rounded-2xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
import Button from '../ui/Button.vue'
const { t } = useI18n()
</script>

<style lang="scss" scoped></style>