<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetcher } from '../../../api/fetcher'
import { Skeleton } from '../../components/ui/skeleton'

definePageMeta({
  layout: 'home',
})

interface UserProfile {
  page_title?: string
  hello?: string
}

function getUserProfileAPI() {
  return fetcher<UserProfile>('/test-template-2024-ssr?format=json')
}

const { isFetching, isError, data, error, refetch } = useQuery({
  queryKey: ['user-profile'],
  queryFn: getUserProfileAPI,
})
</script>

<template>
  <NuxtLayout>
    <div class="container mx-auto px-4 py-8">
      <Logos class="mb-8" />
      <InputEntry class="mb-8" />

      <div class="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-4 border-b">
          <h2 class="text-3xl font-bold">
            <Skeleton v-if="isFetching" class="h-9 w-3/4" />
            <template v-else>
              {{ data?.page_title || 'User Profile' }}
            </template>
          </h2>
        </div>

        <div class="p-4 space-y-4">
          <p class="text-xl">
            <Skeleton v-if="isFetching" class="h-6 w-1/2" />
            <template v-else>
              {{ data?.hello || 'Welcome!' }}
            </template>
          </p>

          <div v-if="isFetching" class="space-y-2">
            <Skeleton class="h-4 w-full" />
            <Skeleton class="h-4 w-5/6" />
            <Skeleton class="h-4 w-4/6" />
          </div>

          <div v-else-if="isError" class="text-red-600 p-4 bg-red-100 rounded-md">
            Error: {{ error }}
          </div>

          <pre v-else class="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
    {{ JSON.stringify(data, null, 2) }}
  </pre>

          <button :disabled="isFetching"
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
            @click="refetch">
            {{ isFetching ? 'Refreshing...' : 'Refresh Data' }}
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
