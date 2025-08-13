import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import './style.css'
import './style/global.css'

import en from './locales/en.json'
import fr from './locales/fr.json'

const userLocale = navigator.language.startsWith('fr') ? 'fr' : 'en'
const i18n = createI18n({
  legacy: false,
  locale: userLocale,
  fallbackLocale: 'fr',
  messages: { en, fr },
})

const app = createApp(App)
app.use(i18n)

AOS.init({ once: true, offset: -50 })
app.mount('#app')
