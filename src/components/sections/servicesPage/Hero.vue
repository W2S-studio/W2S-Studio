<template>
    <section id="home" role="banner" aria-label="Hero Section"
        class="min-h-screen flex items-center justify-center hero-gradient relative ">
        <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
            <p class="text-l md:text-xl text-gray-300 text-center pt-24  leading-relaxed slide-in-stagger">{{
                $t('service-hero.page-cat') }}</p>
            <div>
                <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 mt-8 leading-tight">
                    <span class="block slide-in-stagger delay-1">{{ $t('service-hero.line1') }}</span>
                    <span class="block slide-in-stagger delay-2 text-gradient">{{ $t('service-hero.line2') }}</span>
                    <span class="block slide-in-stagger delay-3 text-gradient">{{ $t('service-hero.line3') }}</span>
                </h1>
            </div>
            <div class="slide-in-stagger delay-4">
                <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                    {{ $t('service-hero.description') }}

                </p>

                <a href="#expertise"> <Button class="hover:scale-105 mb-12" :title="$t('service-hero.cta')" :black="false"
                        size="lg" :disableHover="true" /></a>
            </div>
        </div>

        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="floating-complex absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rotate-45"
                style="animation-delay: 0s;"></div>
            <div class="floating-complex absolute top-1/3 right-20 w-12 h-12 bg-white/10 rounded-full"
                style="animation-delay: -2s;"></div>
            <div class="floating-complex absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white/30 rotate-12"
                style="animation-delay: -4s;"></div>
            <div class="floating-complex absolute top-1/2 left-1/2 w-8 h-8 bg-white/20" style="animation-delay: -1s;">
            </div>
            <div class="floating-complex absolute bottom-40 right-1/3 w-14 h-14 border border-white/15 rounded-full"
                style="animation-delay: -5s;"></div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import Button from '../../ui/Button.vue';
</script>

<style lang="css" scoped>
.logo-text {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    letter-spacing: -0.05em;
}

.hero-gradient {
    background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
    position: relative;
}

.hero-gradient::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.03) 50%, transparent 70%);
    animation: shimmer 6s infinite;
    overflow: hidden;
    max-width: 100%;
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.text-gradient {
    background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.floating-complex {
    animation: floatingComplex 5s ease-in-out infinite;
}

@keyframes floatingComplex {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.7;
    }

    25% {
        transform: translateY(-15px) rotate(3deg);
        opacity: 0.9;
    }

    50% {
        transform: translateY(-10px) rotate(-2deg);
        opacity: 1;
    }

    75% {
        transform: translateY(-20px) rotate(4deg);
        opacity: 0.8;
    }
}

.slide-in-stagger {
    opacity: 0;
    transform: translateY(30px);
    animation: slideInStagger 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-1 {
    animation-delay: 0.2s;
}

.delay-2 {
    animation-delay: 0.4s;
}

.delay-3 {
    animation-delay: 0.6s;
}

.delay-4 {
    animation-delay: 0.8s;
}

@keyframes slideInStagger {
    to {
        opacity: 1;
        transform: translateY(0);
    }
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