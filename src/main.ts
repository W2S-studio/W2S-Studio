import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import './style.css'
import './style/global.css'

import en from './locales/en.json'
import fr from './locales/fr.json'
import { routes } from './router/routes.ts'

const createI18nInstance = () => {
  const userLocale =
    typeof navigator !== 'undefined' && navigator.language?.startsWith('fr') ? 'fr' : 'en'
  return createI18n({
    legacy: false,
    locale: userLocale,
    fallbackLocale: 'fr',
    messages: { en, fr },
  })
}

export const createApp = ViteSSG(
  App,
  {
    routes,
  
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, top: 0 }
      return { left: 0, top: 0 } 
    },
  },
  ({ app, router, isClient }) => {
    app.use(createI18nInstance())

    if (isClient) {
      AOS.init({ once: true, offset: -50 })
     
      router.afterEach(() => {
        setTimeout(() => AOS.refreshHard(), 0)
      })
    }
  }
)
