<script setup>
import RadioLocales from '@/components/RadioLocales.vue'
</script>

<template>
  <main class="px-10 py-20 text-center">
    <slot />
    <RadioLocales />
    <Footer />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </div>
  </main>
</template>
