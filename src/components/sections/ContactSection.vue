<template>
  <section id="contact" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center">
        <h2 class="text-5xl md:text-7xl font-black mb-8 leading-tight" data-aos="fade-up" data-aos-duration="800">
          {{ t('contact.title1') }}<br />
          <span class="text-black">{{ t('contact.title2') }}</span><br />
          {{ t('contact.title3') }}
        </h2>

        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="700">
          {{ t('contact.description') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8" data-aos="fade-up" data-aos-duration="600">
          <input v-model="email" type="email" :placeholder="t('contact.placeholder')"
            class="px-4 py-3 text-base border-2 border-gray-200 focus:border-black outline-none flex-1 transition-colors duration-300"
            :class="{ 'border-red-500': emailTouched && !isValidEmail && email.length > 0 }" @blur="validateEmail" />
        </div>

        <div v-if="emailTouched && !isValidEmail && email.length > 0" 
             class="text-red-500 text-sm mb-4">
          {{ t('contact.emailError') }}
        </div>

        <div class="max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="700">
          <div class="transition-all duration-500 ease-in-out"
               :class="{ 'max-h-[500px] opacity-100': showForm, 'max-h-0 opacity-0': !showForm }">

            <div class="space-y-6 pt-2">
              <div data-aos="fade-up" data-aos-duration="600">
                <input v-model="subject" type="text" :placeholder="t('contact.subjectPlaceholder')"
                  class="w-full px-4 py-3 text-base border-2 border-gray-200 focus:border-black outline-none transition-colors duration-300"
                  :class="{ 'border-red-500': subjectTouched && !subject.trim() }" @blur="subjectTouched = true" />
                <div v-if="subjectTouched && !subject.trim()" 
                     class="text-red-500 text-sm mt-1">
                  {{ t('contact.subjectError') }}
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="600">
                <textarea v-model="message" :placeholder="t('contact.messagePlaceholder')" rows="4"
                  class="w-full px-4 py-3 text-base border-2 border-gray-200 focus:border-black outline-none transition-colors duration-300 resize-none min-h-[100px] max-h-[200px]"
                  :class="{ 'border-red-500': messageTouched && (!message.trim() || message.length > 4900) }" @blur="messageTouched = true"></textarea>
                <div v-if="messageTouched && !message.trim()" 
                     class="text-red-500 text-sm mt-1">
                  {{ t('contact.messageError') }}
                </div>
                <div v-else-if="messageTouched && message.length > 4900" 
                     class="text-red-500 text-sm mt-1">
                  {{ t('contact.messageTooLong') }}
                </div>
                <div class="text-gray-500 text-xs mt-1">
                  {{ message.length }}/5000
                </div>
              </div>

              <div v-if="isClient" class="my-2" data-aos="fade-up" data-aos-duration="600">
                <div class="cf-turnstile" data-sitekey="0x4AAAAAABrc5ID8zvgNqLFP"
                  data-callback="__tsResolved" data-refresh-expired="auto"></div>
              </div>

              <div v-if="captchaTouched && !token" 
                   class="text-red-500 text-sm">
                {{ t('contact.captchaError') }}
              </div>

              <div data-aos="fade-up" data-aos-duration="600">
                <Button 
                  :disabled="!canSend || sending" 
                  @click="sendMessage" 
                  :title="buttonText"
                  :class="!canSend ? 'opacity-50 cursor-not-allowed' : ''" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Toast v-for="toast in toasts" :key="toast.id"
           :id="toast.id"
           :type="toast.type"
           :title="toast.title"
           :message="toast.message"
           :show="toast.show"
           :duration="5000"
           @close="removeToast" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '../ui/Button.vue'
import Toast from '../ui/Toast.vue'

declare global {
  interface ImportMeta {
    env: Record<string, any>
    SSR?: boolean
  }
  interface Window {
    __tsResolved?: (t: string) => void
  }
}

const { t } = useI18n()

const isClient = ref(!import.meta.env.SSR)
const email = ref('')
const subject = ref('')
const message = ref('')
const showForm = ref(false)
const sending = ref(false)
const token = ref<string>('')

const emailTouched = ref(false)
const subjectTouched = ref(false)
const messageTouched = ref(false)
const captchaTouched = ref(false)

interface ToastItem {
  id: number
  type: 'success' | 'error'
  title: string
  message?: string
  show: boolean
}
const toasts = ref<ToastItem[]>([])
let toastId = 0

const isValidEmail = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))

const canSend = computed(() => 
  isValidEmail.value && 
  subject.value.trim() && 
  message.value.trim() && 
  message.value.length <= 5000 && 
  token.value
)

const buttonText = computed(() => {
  if (sending.value) return t('contact.sending')
  if (!canSend.value) return t('contact.buttonDisabled')
  return t('contact.button') || 'Send Message'
})

const showToast = (type: 'success' | 'error', title: string, message?: string) => {
  const id = ++toastId
  toasts.value.push({ id, type, title, message, show: true })
  setTimeout(() => removeToast(id), 5000)
}

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value[index].show = false
    setTimeout(() => {
      toasts.value.splice(index, 1)
    }, 300)
  }
}

watch(email, (val) => {
  if (!val || !isValidEmail.value) {
    showForm.value = false
    subject.value = ''
    message.value = ''
    subjectTouched.value = false
    messageTouched.value = false
    captchaTouched.value = false
  } else {
    showForm.value = true
  }
})

const validateEmail = () => {
  emailTouched.value = true
  if (isValidEmail.value) {
    showForm.value = true
  }
}

onMounted(() => {
  if (!import.meta.env.SSR) {
    window.__tsResolved = (t: string) => {
      token.value = t
      captchaTouched.value = true
    }
  }
})

onBeforeUnmount(() => {
  if (!import.meta.env.SSR) {
    // @ts-ignore
    window.turnstile?.reset?.()
    token.value = ''
  }
})

async function sendMessage() {
  emailTouched.value = true
  subjectTouched.value = true
  messageTouched.value = true
  captchaTouched.value = true

  if (!canSend.value) {
    showToast('error', 
      t('contact.validationError'),
      t('contact.validationErrorDesc')
    )
    return
  }

  sending.value = true
  
  try {
    const res = await fetch('https://api.w2s-studio.ca/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        subject: subject.value,
        message: message.value,
        token: token.value
      })
    })
    
    const data = await res.json().catch(() => ({}))
    
    if (!res.ok || !data?.ok) {
      throw new Error(data?.error || `Server error (${res.status})`)
    }

    showToast('success', 
      t('contact.successTitle'),
      t('contact.successMessage')
    )

    email.value = ''
    subject.value = ''
    message.value = ''
    showForm.value = false
    token.value = ''
    emailTouched.value = false
    subjectTouched.value = false
    messageTouched.value = false
    captchaTouched.value = false

    if (!import.meta.env.SSR) {
      // @ts-ignore
      window.turnstile?.reset?.()
    }

  } catch (error) {
    console.error('Send message error:', error)
    
    let errorTitle = t('contact.errorTitle')
    let errorMessage = t('contact.errorMessage')
    
    if (error.message.includes('Captcha failed')) {
      errorTitle = t('contact.captchaFailedTitle')
      errorMessage = t('contact.captchaFailedMessage')
    } else if (error.message.includes('Bad Request')) {
      errorTitle = t('contact.badRequestTitle')
      errorMessage = t('contact.badRequestMessage') || 'Please check your input and try again'
    } else if (error.message.includes('Mailgun error')) {
      errorTitle = t('contact.mailgunErrorTitle') || 'Email service error'
      errorMessage = t('contact.mailgunErrorMessage') || 'Our email service is temporarily unavailable'
    }
    
    showToast('error', errorTitle, errorMessage)
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
input:focus,
textarea:focus {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}
</style>