<template>
  <Home />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Home from './components/views/Home.vue'
import { query } from 'vue-gtag'

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return m ? m[1] : null
}
function statsAllowedFromCookie(): boolean {
  const raw = getCookie('CookieConsent')
  if (!raw) return false
  try { return decodeURIComponent(raw).includes('statistics:true') } catch { return false }
}

onMounted(() => {
  if ((window as any).__consentWired) return
  ;(window as any).__consentWired = true

  const applyConsent = () => {
    const stats = statsAllowedFromCookie()
    query('consent', 'update', { analytics_storage: stats ? 'granted' : 'denied' })
  }

  applyConsent()
  window.addEventListener('CookiebotOnConsentReady', applyConsent, { once: true })
})
</script>

<style lang="scss" scoped></style>
