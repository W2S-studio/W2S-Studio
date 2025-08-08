<template>
  <section id="contact" class="py-32 bg-white relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="section-reveal text-center">
        <h2 class="text-5xl md:text-7xl font-black mb-8 leading-tight"
            data-aos="fade-down" 
            data-aos-duration="800" 
            data-aos-delay="0">
          {{ t('contact.title1') }}<br />
          <span class="text-gradient">{{ t('contact.title2') }}</span><br />
          {{ t('contact.title3') }}
        </h2>
        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
           data-aos="fade-down" 
           data-aos-duration="700" 
           data-aos-delay="200">
          {{ t('contact.description') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8"
             data-aos="fade-down" 
             data-aos-duration="600" 
             data-aos-delay="400">
          <input
            v-model="email"
            type="email"
            :placeholder="t('contact.placeholder')"
            class="px-4 py-3 text-base border-2 border-gray-200 focus:border-black outline-none flex-1 transition-all duration-300"
            :class="{ 'border-green-500': isValidEmail && email }"
            @blur="validateEmail"
          />
          <Button @click="sendMessage" :title="t('contact.button')"/>
        </div>

        <div class="max-w-2xl mx-auto overflow-hidden">
          <div 
            class="form-container transition-all duration-700 ease-in-out"
            :class="showForm ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-8'"
          >
            <div class="space-y-6 pt-8">
              <div class="form-field-enter">
                <input
                  v-model="subject"
                  type="text"
                  :placeholder="t('contact.subjectPlaceholder')"
                  class="w-full px-4 py-3 text-base border-2 border-gray-200 focus:border-black outline-none transition-all duration-300"
                />
              </div>
              
              <div class="form-field-enter" style="animation-delay: 0.1s;">
                <textarea
                  v-model="message"
                  :placeholder="t('contact.messagePlaceholder')"
                  rows="4"
                  class="w-full px-4 py-3 text-base border-2 border-gray-200 focus:border-black outline-none transition-all duration-300 resize-none min-h-[100px] max-h-[200px] overflow-y-auto"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from '../ui/Button.vue'

const { t } = useI18n()

const email = ref('')
const subject = ref('')
const message = ref('')
const showForm = ref(false)

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

watch(email, (newVal) => {
  if (!newVal || !isValidEmail.value) {
    showForm.value = false
    subject.value = ''
    message.value = ''
  } else if (isValidEmail.value && newVal) {
    setTimeout(() => {
      showForm.value = true
    }, 300)
  }
})

const validateEmail = () => {
  if (isValidEmail.value && !showForm.value) {
    setTimeout(() => {
      showForm.value = true
    }, 300)
  }
}

const sendMessage = () => {
  if (isValidEmail.value && subject.value && message.value) {
    console.log('Sending message:', {
      email: email.value,
      subject: subject.value,
      message: message.value
    })
    // Mailgun API call here.
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
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}
</style>