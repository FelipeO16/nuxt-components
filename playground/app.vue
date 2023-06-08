<template>
  <div class="w-screen h-screen" :class="{ dark: dark }">
    <div
      class="w-full h-full bg-muted-100 dark:bg-muted-900 flex flex-col items-end"
    >
      <div class="w-1/6 flex justify-end px-4">
        <DarkMode msg="s" @click="dark = !dark" />
      </div>
      <div class="run w-full h-full flex items-center justify-center">
        <div class="w-5/6 h-48">
          <ui-accordion
            :items="[
              { title: 'Teste', content: 'lorem ipsun' },
              { title: 'Teste', content: 'lorem ipsun' },
              { title: 'Teste', content: 'lorem ipsun' },
            ]"
            action="plus"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "./.nuxt/imports";

const dark = ref(false);
</script>

<style>
.nui-focus {
  outline-offset: 2px;
  outline-style: dashed;
  outline-width: 1px;
  @apply focus-visible:outline-muted-300 dark:focus-visible:outline-muted-700 outline-none focus-visible:outline-dashed;
}

.is-button {
  align-items: center;
  display: inline-flex;
  height: 2.5rem;
  justify-content: center;
  position: relative;
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 0.5rem 1.25rem;
  text-decoration-line: none;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.is-button-default {
  background-color: #fff;
  border-width: 1px;
  @apply border-muted-300 text-muted-700 dark:bg-muted-700 dark:text-muted-300 dark:border-muted-600 dark:text-white;
}
</style>
