<template>

    <Home></Home>

</template>

<script setup>
import { onMounted } from 'vue';
import Home from './components/views/Home.vue';
import { useGtag } from 'vue-gtag-next';

const { gtag, isEnabled, enable, disable } = useGtag();

onMounted(() => {
    const checkCookieConsent = () => {
        const cookieConsent = document.cookie
            .split('; ')
            .find(row => row.startsWith('CookieConsent='));
        
        if (cookieConsent) {
            const consentData = cookieConsent.split('=')[1];
            
            if (consentData.includes('statistics:true')) {
                enable();
                console.log('Google Analytics enabled after cookie consent.');
            } else {
                disable();
                console.log('Google Analytics disabled - statistics not allowed.');
            }
        }
    }

    checkCookieConsent();
    window.addEventListener('CookieYesUpdated', () => {
        checkCookieConsent();
    });
});
</script>

<style lang="scss" scoped></style>