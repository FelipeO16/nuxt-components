<template>
  <div class="w-screen h-screen" :class="{ dark: dark }">
    <div
      class="w-full h-full bg-muted-200 dark:bg-muted-900 flex flex-col items-end"
    >
      <div class="w-1/6 flex justify-end px-4">
        <DarkMode msg="s" @click="dark = !dark" />
      </div>
      <div class="run w-full h-full flex items-center justify-center gap-4">
        <ui-button color="primary" text="teste" />
        <div class="w-24 h-24">
          <ui-avatar
            src="https://tairo.cssninja.io/img/avatars/3.svg"
            shape="full"
          />
        </div>
        <ui-accordion
          :items="rules"
          class="w-2/6"
          exclusive
          action="chevron"
          shape="rounded"
        />
        <InputV1 />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "./.nuxt/imports";
const rules = [
  {
    title: "Power gaming",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae nesciunt autem illo omnis velit cupiditate excepturi natus ea saepe, laudantium voluptatum rem molestias dolorem eligendi amet tempora consequatur nostrum?",
  },
  {
    title: "Combat logging",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae nesciunt autem illo omnis velit cupiditate excepturi natus ea saepe, laudantium voluptatum rem molestias dolorem eligendi amet tempora consequatur nostrum?",
  },
  {
    title: "Meta gaming",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae nesciunt autem illo omnis velit cupiditate excepturi natus ea saepe, laudantium voluptatum rem molestias dolorem eligendi amet tempora consequatur nostrum?",
  },
];

const dark = ref(false);
</script>
