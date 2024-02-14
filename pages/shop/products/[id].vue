<script setup>
const route = useRoute()
const productId = route.params.id
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">
      Product Detail
    </h1>
    <p class="mt-2">
      Product ID: {{ productId }}
    </p>

    <div class="mt-4">
      <img class="w-full h-48 object-cover" src="https://via.placeholder.com/800" alt="Product Image">
    </div>

    <!-- product detail -->
    <div class="mt-4">
      <p class="text-gray-600">
        Product description...
      </p>
    </div>

    <div class="mt-4">
      <NuxtLink
        class="text-sm  bg-slate-400 px-4 py-2 rounded-lg"
        to="/shop/search"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
