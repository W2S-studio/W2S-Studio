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
            const consentData = decodeURIComponent(cookieConsent);
            
            if (consentData.includes('statistics:true')) {
                enable();
                console.log('Google Analytics enabled after cookie consent.');
            } else {
                disable();
                console.debug('Current cookie consent: ', consentData);
                console.log('Google Analytics disabled - statistics not allowed.');
            }
        }
    }

    checkCookieConsent();
    window.addEventListener('CookiebotOnAccept', () => {
        console.log('Cookiebot accept event triggered');
        checkCookieConsent();
    });
    
    window.addEventListener('CookiebotOnDecline', () => {
        console.log('Cookiebot decline event triggered');
        disable();
    });
});
</script>

<style lang="scss" scoped></style>