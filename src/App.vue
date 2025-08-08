<template>

    <Home></Home>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useConsent, query } from 'vue-gtag'

const { acceptAll, rejectAll } = useConsent()

onMounted(() => {
  const consent = parseConsent()
  if (consent) {
    query('consent', 'update', { analytics_storage: consent.stats ? 'granted' : 'denied' })
    consent.stats ? acceptAll() : rejectAll()
  } else {
    query('consent', 'update', { analytics_storage: 'denied' })
  }

  window.addEventListener('CookiebotOnAccept', () => {
    const c = parseConsent()
    const stats = !!c?.stats
    query('consent', 'update', { analytics_storage: stats ? 'granted' : 'denied' })
    stats ? acceptAll() : rejectAll()
  })
  window.addEventListener('CookiebotOnDecline', () => {
    query('consent', 'update', { analytics_storage: 'denied' })
    rejectAll()
  })
})

function getCookie(name: string) {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return m ? m[1] : null
}

function parseConsent(): { stats: boolean } | null {
  const raw = getCookie('CookieConsent')
  if (!raw) return null
  try {
    const decoded = decodeURIComponent(raw)
    return { stats: decoded.includes('statistics:true') }
  } catch {
    return null
  }
}
</script>


<style lang="scss" scoped></style>