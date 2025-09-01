<template>
  <section id="contact" class="py-24 px-6 bg-white relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="section-reveal text-center">
        <h2 class="text-5xl md:text-7xl font-black mb-8 leading-tight" data-aos="fade-up" data-aos-duration="800"
          data-aos-delay="0">
          {{ t('contact.title1') }}<br />
          <span class="text-gradient">{{ t('contact.title2') }}</span><br />
          {{ t('contact.title3') }}
        </h2>

        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="700"
          data-aos-delay="120">
          {{ t('contact.description') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8" data-aos="fade-up"
          data-aos-duration="600" data-aos-delay="220">
          <input v-model="email" type="email" :placeholder="t('contact.placeholder')"
            class="px-4 py-3 text-base border-2 transition-all duration-300 outline-none flex-1"
            :class="emailFieldClass" @blur="validateEmail" />
        </div>
        
        <div v-if="emailTouched && !isValidEmail && email" 
             class="text-red-500 text-sm mb-4 transition-opacity duration-300">
          {{ t('contact.emailError') }}
        </div>

        <div class="max-w-2xl mx-auto overflow-hidden" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
          <div class="form-container transition-all duration-700 ease-in-out"
            :class="showForm ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-8'">

            <div class="space-y-6 pt-2">
              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="380">
                <input v-model="subject" type="text" :placeholder="t('contact.subjectPlaceholder')"
                  class="w-full px-4 py-3 text-base border-2 outline-none transition-all duration-300"
                  :class="subjectFieldClass" @blur="subjectTouched = true" />
                <div v-if="subjectTouched && !subject.trim()" 
                     class="text-red-500 text-sm mt-1 transition-opacity duration-300">
                  {{ t('contact.subjectError') }}
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="460">
                <textarea v-model="message" :placeholder="t('contact.messagePlaceholder')" rows="4"
                  class="w-full px-4 py-3 text-base border-2 outline-none transition-all duration-300 resize-none min-h-[100px] max-h-[200px] overflow-y-auto"
                  :class="messageFieldClass" @blur="messageTouched = true"></textarea>
                <div v-if="messageTouched && !message.trim()" 
                     class="text-red-500 text-sm mt-1 transition-opacity duration-300">
                  {{ t('contact.messageError') }}
                </div>
                <div v-else-if="message.length > 4900" 
                     class="text-red-500 text-sm mt-1 transition-opacity duration-300">
                  {{ t('contact.messageTooLong') }}
                </div>
                <div class="text-gray-400 text-xs mt-1">
                  {{ message.length }}/5000
                </div>
              </div>

              <div v-if="isClient" class="cf-turnstile my-2" data-sitekey="0x4AAAAAABrc5ID8zvgNqLFP"
                data-callback="__tsResolved" data-refresh-expired="auto" data-aos="fade-up" data-aos-duration="600"
                data-aos-delay="540">
              </div>

              <div v-if="captchaTouched && !token" 
                   class="text-red-500 text-sm transition-opacity duration-300">
                {{ t('contact.captchaError') }}
              </div>

              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="620">
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

    <div class="fixed top-4 right-4 z-50 space-y-2">
      <div v-for="toast in toasts" :key="toast.id"
           class="bg-white border-l-4 rounded-lg shadow-xl p-4 min-w-[300px] max-w-[400px] transform transition-all duration-300"
           :class="[
             toast.type === 'success' ? 'border-green-500' : 'border-red-500',
             toast.show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
           ]">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg v-if="toast.type === 'success'" class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3 flex-1">
            <p class="text-sm font-medium text-gray-900">
              {{ toast.title }}
            </p>
            <p v-if="toast.message" class="mt-1 text-sm text-gray-600">
              {{ toast.message }}
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button @click="removeToast(toast.id)" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-600 focus:outline-none">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '../ui/Button.vue'

declare global {
  interface ImportMeta {
    env: Record<string, any>
    SSR?: boolean
  }
}

const { t } = useI18n()

interface Toast {
  id: number
  type: 'success' | 'error'
  title: string
  message?: string
  show: boolean
}

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

const toasts = ref<Toast[]>([])
let toastId = 0

const isValidEmail = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))

const emailFieldClass = computed(() => ({
  'border-gray-200 focus:border-black': !emailTouched.value || !email.value,
  'border-green-500': isValidEmail.value && email.value,
  'border-red-500': emailTouched.value && !isValidEmail.value && email.value
}))

const subjectFieldClass = computed(() => ({
  'border-gray-200 focus:border-black': !subjectTouched.value || subject.value.trim(),
  'border-red-500': subjectTouched.value && !subject.value.trim()
}))

const messageFieldClass = computed(() => ({
  'border-gray-200 focus:border-black': !messageTouched.value || (message.value.trim() && message.value.length <= 4900),
  'border-red-500': messageTouched.value && (!message.value.trim() || message.value.length > 4900)
}))

const canSend = computed(() => {
  return isValidEmail.value && 
         subject.value.trim() && 
         message.value.trim() && 
         message.value.length <= 5000 && 
         token.value
})

const buttonText = computed(() => {
  if (sending.value) return t('contact.sending')
  if (!canSend.value) return t('contact.buttonDisabled')
  return t('contact.button') || 'Send Message'
})

function showToast(type: 'success' | 'error', title: string, message?: string) {
  const toast: Toast = {
    id: ++toastId,
    type,
    title,
    message,
    show: false
  }
  
  toasts.value.push(toast)
  
  setTimeout(() => {
    toast.show = true
  }, 50)
  
  setTimeout(() => {
    removeToast(toast.id)
  }, 5000)
}

function removeToast(id: number) {
  const toast = toasts.value.find(t => t.id === id)
  if (toast) {
    toast.show = false
    setTimeout(() => {
      const index = toasts.value.findIndex(t => t.id === id)
      if (index > -1) {
        toasts.value.splice(index, 1)
      }
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
    setTimeout(() => (showForm.value = true), 300)
  }
})

const validateEmail = () => {
  emailTouched.value = true
  if (isValidEmail.value && !showForm.value) {
    setTimeout(() => (showForm.value = true), 300)
  }
}

onMounted(() => {
  if (!import.meta.env.SSR) {
    // @ts-ignore
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
.form-container {
  transform-origin: top;
}

.form-field-enter {
  animation: slideUpFade 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideUpFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

input:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, .1);
}

@keyframes toast-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toast-slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>