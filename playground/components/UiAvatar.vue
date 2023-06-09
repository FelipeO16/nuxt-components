<template>
  <div class="flex flex-wrap items-end gap-4">
    <div
      :class="`${
        shape === 'rounded'
          ? 'rounded-md'
          : shape === 'straight'
          ? 'rounded-none'
          : shape === 'curved'
          ? 'rounded-xl'
          : shape === 'full'
          ? 'rounded-full'
          : ''
      }`"
      class="w-full h-full relative inline-flex shrink-0 items-center justify-center outline-none"
    >
      <div
        class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
        :class="
          shape === 'rounded'
            ? 'rounded-md'
            : shape === 'straight'
            ? 'rounded-none'
            : shape === 'curved'
            ? 'rounded-xl'
            : shape === 'full'
            ? 'rounded-full'
            : ''
        "
      >
        <img :src="src" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: number;
  src: string;
  shape: "rounded" | "straight" | "curved" | "full" | undefined;
}>();
</script>
