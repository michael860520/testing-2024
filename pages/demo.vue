<script setup>
</script>

<template>
  <br>

  <div class="slider-cont">
    <h1>Demo Page</h1>

    <p>Vueform is a form builder for Vue 3. It is built with Vue 3 and Typescript.</p>
    <ClientOnly>
      <Vueform>
        <TextElement name="hello_world" label="Hello" placeholder="World" />

        <SliderElement name="slider" label="Slider" :default="[10, 30]" />
      </Vueform>
    </ClientOnly>
  </div>
</template>
