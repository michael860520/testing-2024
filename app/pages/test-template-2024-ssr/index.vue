<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetcher } from '../../../api/fetcher'

function getUserProfileAPI() {
  return fetcher('/test-template-2024-ssr?format=json')
}

const { isFetching, isError, data, error } = useQuery({
  queryKey: ['user-profile'],
  queryFn: getUserProfileAPI,
})
</script>

<template>
  <NuxtLayout>
    <Logos />
    <InputEntry />
    <div class="text-7xl">
      2024 Revamp
    </div>
    <div v-if="isFetching">
      isFetching: {{ isFetching }}
    </div>
    <div v-if="data">
      {{ data }}
    </div>
    <div v-if="isError">
      Error: {{ error }}
    </div>
  </NuxtLayout>
</template>
