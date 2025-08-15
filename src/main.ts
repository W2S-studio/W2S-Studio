import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import './style.css'
import './style/global.css'

import en from './locales/en.json'
import fr from './locales/fr.json'

const createI18nInstance = () => {
  const userLocale = typeof navigator !== 'undefined' && navigator.language.startsWith('fr') ? 'fr' : 'en'
  return createI18n({
    legacy: false,
    locale: userLocale,
    fallbackLocale: 'fr',
    messages: { en, fr },
  })
}

export const createApp = ViteSSG(
  App,
  { routes: [{ path: '/', component: App }] },
  ({ app }) => {
    const i18n = createI18nInstance()
    app.use(i18n)

    if (!import.meta.env.SSR) {
      AOS.init({ once: true, offset: -50 })
    }
  }
)