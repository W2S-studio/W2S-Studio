<template>
  <section id="contact" class="py-32 bg-white relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="section-reveal text-center">
        <h2 class="text-4xl sm:text-6xl font-black mb-8 leading-tight">
          {{ t('contact.title1') }}<br />
          <span class="text-gradient">{{ t('contact.title2') }}</span><br />
          {{ t('contact.title3') }}
        </h2>
        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ t('contact.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            :placeholder=" t('contact.placeholder') "
            class="px-4 py-3 text-base border-2 border-gray-200 focus:border-black outline-none flex-1 transition-all"
          />
         <Button :title="t('contact.button')"/>
        </div>
        <div class="mt-8 text-sm text-gray-500">
          {{ t('contact.emailText') }}
          <a
            :href="'mailto:' + t('contact.email')"
            class="text-black font-semibold hover:underline transition-all"
          >
            {{ t('contact.email', { email: 'hello@w2s.studio' }) }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import Button from '../ui/Button.vue';
const { t } = useI18n()

</script>

<style lang="scss" scoped></style>