<template>

    <Home></Home>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useConsent, query } from 'vue-gtag'

const { acceptAll, rejectAll } = useConsent()

function applyConsentFromCookiebot() {
  const raw = document.cookie.split('; ').find(r => r.startsWith('CookieConsent='))
  if (!raw) return
  const consentData = decodeURIComponent(raw.substring('CookieConsent='.length))
  const statsAllowed = consentData.includes('statistics:true')

  query('consent', 'update', { analytics_storage: statsAllowed ? 'granted' : 'denied' })

  if (statsAllowed) acceptAll()
  else rejectAll()
}

onMounted(() => {
  applyConsentFromCookiebot()
  window.addEventListener('CookiebotOnAccept', applyConsentFromCookiebot)
  window.addEventListener('CookiebotOnDecline', () => {
    query('consent', 'update', { analytics_storage: 'denied' })
    rejectAll()
  })
})
</script>


<style lang="scss" scoped></style>