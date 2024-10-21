<script setup lang="ts">
const searchValue = ref('')

const router = useRouter()
function go() {
  if (searchValue.value)
    router.push({ path: '/test/search', query: { q: searchValue.value } })
}
</script>

<template>
  <div>
    <!-- <input id="input" v-model="searchValue" placeholder="Search Product?" type="text" autocomplete="off"
      class="px-4 py-2 mt-5 w-[250px] text-center bg-transparent border-[1px] rounded-lg border-gray-200 dark:border-gray-700 outline-none active:outline-none"
      @keydown.enter="go">
    <div>
      <button class="m-3 text-sm bg-slate-400 px-4 py-2 rounded-lg" :disabled="!searchValue" @click="go">
        GO
      </button>
    </div> -->
  </div>
</template>
