<script setup lang="ts">
import type { LocationQueryValue } from 'vue-router'

const route = useRoute()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

function getQueryAsString(queryValue: LocationQueryValue | LocationQueryValue[]): string {
  if (Array.isArray(queryValue))
    return queryValue.filter(Boolean).join(', ')
  return queryValue || ''
}

const searchValue = ref(getQueryAsString(route.query.q ?? ''))
const inputValue = ref('')

watch(
  () => route.query.q as LocationQueryValue | LocationQueryValue[] | undefined,
  (newQuery) => {
    const queryAsString = getQueryAsString(newQuery ?? '')
    searchValue.value = queryAsString
    inputValue.value = queryAsString

    if (typeof queryAsString === 'string')
      user.setNewName(queryAsString)
  },
)

function clearSearch() {
  router.push('/test/search')
}
</script>

<template>
  <div class="flex flex-col gap-4 p-6">
    <div class="text-center">
      <div class="i-twemoji:waving-hand inline-block animate-shake-x animate-duration-5000 text-4xl" />
      <template v-if="searchValue">
        <h3 class="text-3xl font-bold mb-4">
          {{ t('SearchResult') }} "{{ searchValue }}"
        </h3>
        <button class="mb-4 bg-red-500 text-white rounded px-4 py-2" @click="clearSearch">
          {{ t('ClearSearch') }}
        </button>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="i in 12" :key="i" class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Product Image">
            <div class="p-4">
              <h4 class="text-lg font-semibold text-pink-500">
                Name: {{ searchValue }}
              </h4>
              <h5 class="text-md font-semibold text-pink-400">
                ID: Product {{ i }}
              </h5>
              <p class="text-gray-600">
                Product description...
              </p>
              <NuxtLink :to="`/products/${i}`" class="mt-4 bg-blue-500 text-white rounded px-4 py-2 inline-block">
                View
              </NuxtLink>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <h3 class="text-3xl font-bold mb-4">
          {{ t('SearchTitle') }}
        </h3>
        <div class="flex justify-center items-center">
          <input v-model="inputValue" type="text" class="border border-gray-300 p-2 rounded text-black"
            :placeholder="t('TypeHere')">
          <NuxtLink :to="`/search?q=${inputValue}`" class="ml-2 bg-blue-500 text-white rounded px-4 py-2">
            {{ t('Search') }}
          </NuxtLink>
        </div>
      </template>
    </div>

    <div class="text-center">
      <NuxtLink class="text-sm bg-slate-400 px-4 py-2 rounded-lg inline-block" to="/">
        {{ t('Back') }}
      </NuxtLink>
    </div>
  </div>
</template>
