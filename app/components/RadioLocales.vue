<script setup>
const { locale, setLocale } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center bg-white p-4">
    <h1 class="mt-24 text-8xl text-blue-500 font-medium">
      {{ $t("hello") }}
    </h1>
    <div class="my-8 flex flex-row justify-center">
      <label class="text-gray-600">{{ $t("language") }}</label>
      <span class="ml-4 text-gray-800 font-bold">{{ locale }}</span>
    </div>

    <div class="flex gap-4">
      <button
        type="button"
        class="inline-flex items-center border border-transparent rounded-md bg-blue-100 px-4 py-2 text-sm text-blue-700 font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        @click="setLocale('en')"
      >
        English
      </button>

      <button
        type="button"
        class="inline-flex items-center border border-transparent rounded-md bg-blue-100 px-4 py-2 text-sm text-blue-700 font-medium hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        @click="setLocale('zh-tw')"
      >
        繁體中文
      </button>
    </div>
  </div>
</template>
