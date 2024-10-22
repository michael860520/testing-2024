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

const { isFetching, isError, data, error } = useQuery({
  queryKey: ['user-profile'],
  queryFn: getUserProfileAPI,
})
</script>

<template>
  <NuxtLayout>
    <div class="container mx-auto px-4 py-8">
      <Logos class="mb-8" />
      <InputEntry class="mb-8" />

      <div class="space-y-4">
        <h1 class="text-4xl font-bold">
          <Skeleton v-if="isFetching" class="h-10 w-3/4" />
          <template v-else>
            {{ data?.page_title }}
          </template>
        </h1>

        <p class="text-xl">
          <Skeleton v-if="isFetching" class="h-6 w-1/2" />
          <template v-else>
            {{ data?.hello }}
          </template>
        </p>

        <div v-if="isFetching" class="space-y-2">
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-5/6" />
          <Skeleton class="h-4 w-4/6" />
        </div>

        <div v-else-if="isError" class="text-red-600">
          Error: {{ error }}
        </div>

        <pre v-else class="bg-gray-100 p-4 rounded-lg overflow-auto">
  {{ JSON.stringify(data, null, 2) }}
</pre>
      </div>
    </div>
  </NuxtLayout>
</template>
