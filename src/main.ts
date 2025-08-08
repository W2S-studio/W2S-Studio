import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue'
import './style.css'
import './style/global.css'

// Import des fichiers de langue
import en from './locales/en.json'
import fr from './locales/fr.json'

const userLocale = navigator.language.startsWith('fr') ? 'fr' : 'en'

// Création de i18n
const i18n = createI18n({
  legacy: false,
  locale: userLocale,
  fallbackLocale: 'fr',
  messages: { en, fr }
})

// Création de l'app Vue
const app = createApp(App)

// Ajout de i18n à l'app
app.use(i18n)

// Initialisation de AOS
AOS.init({ once: true, offset: -50 })

// Montage final
app.mount('#app')
