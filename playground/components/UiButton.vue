<template>
  <div data-v-40d35fe7="" class="flex flex-wrap items-end gap-4">
    <button
      v-if="color === 'default' || color === undefined"
      type="button"
      class="is-button h-10 relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed outline-transparent rounded is-button-default"
    >
      {{ text }}</button
    ><button
      v-else-if="color === 'primary'"
      type="button"
      class="is-button h-10 relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed outline-transparent rounded bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500"
    >
      {{ text }}</button
    ><button
      v-else-if="color === 'success'"
      type="button"
      class="is-button h-10 relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed outline-transparent rounded bg-success-500 dark:bg-success-500 hover:enabled:bg-success-400 dark:hover:enabled:bg-success-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-success-500/50 dark:hover:enabled:shadow-success-800/20 focus-visible:outline-success-400/70 focus-within:outline-success-400/70 focus-visible:bg-success-500 active:enabled:bg-success-500 dark:focus-visible:outline-success-400/70 dark:focus-within:outline-success-400/70 dark:focus-visible:bg-success-500 dark:active:enabled:bg-success-500"
    >
      {{ text }}</button
    ><button
      v-else-if="color === 'info'"
      type="button"
      class="is-button h-10 relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed outline-transparent rounded bg-info-500 dark:bg-info-500 text-white hover:enabled:bg-info-400 dark:hover:enabled:bg-info-400 hover:enabled:shadow-lg hover:enabled:shadow-info-500/50 dark:hover:enabled:shadow-info-800/20 focus-visible:outline-info-400/70 focus-within:outline-info-400/70 focus-visible:bg-info-500 active:enabled:bg-info-500 dark:focus-visible:outline-info-400/70 dark:focus-within:outline-info-400/70 dark:focus-visible:bg-info-500 dark:active:enabled:bg-info-500"
    >
      {{ text }}</button
    ><button
      v-else-if="color === 'warning'"
      type="button"
      class="is-button h-10 relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed outline-transparent rounded bg-warning-500 dark:bg-warning-500 hover:enabled:bg-warning-400 dark:hover:enabled:bg-warning-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-warning-500/50 dark:hover:enabled:shadow-warning-800/20 focus-visible:outline-warning-400/70 focus-within:outline-warning-400/70 focus-visible:bg-warning-500 active:enabled:bg-warning-500 dark:focus-visible:outline-warning-400 dark:focus-within:outline-warning-400 dark:focus-visible:bg-warning-500 dark:active:enabled:bg-warning-500"
    >
      {{ text }}</button
    ><button
      v-else-if="color === 'danger'"
      type="button"
      class="is-button h-10 relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed outline-transparent rounded bg-danger-500 dark:bg-danger-500 hover:enabled:bg-danger-400 dark:hover:enabled:bg-danger-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-danger-500/50 dark:hover:enabled:shadow-danger-800/20 focus-visible:outline-danger-400/70 focus-within:outline-danger-400/70 focus-visible:bg-danger-500 active:enabled:bg-danger-500 dark:focus-visible:outline-danger-400 dark:focus-within:outline-danger-400 dark:focus-visible:bg-danger-500 dark:active:enabled:bg-danger-500"
    >
      {{ text }}</button
    ><button
      v-else-if="color === 'muted'"
      type="button"
      class="is-button h-10 relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed outline-transparent rounded bg-muted-200 dark:bg-muted-500 hover:enabled:bg-muted-400 dark:hover:enabled:bg-muted-400 text-muted-500 hover:text-white hover:enabled:shadow-lg hover:enabled:shadow-muted-500/50 dark:hover:enabled:shadow-muted-800/20 focus-visible:outline-muted-400/70 focus-within:outline-muted-400/70 focus-visible:bg-muted-500 active:enabled:bg-muted-500 dark:focus-visible:outline-muted-400 dark:focus-within:outline-muted-400 dark:focus-visible:bg-muted-500 dark:active:enabled:bg-muted-500"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color:
    | "default"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "muted"
    | undefined;
  text: string;
}>();
</script>

<style scoped>
.is-button {
  outline-offset: 2px;
  outline-style: dashed;
  outline-width: 1px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.is-button-default {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: #fff;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-color: rgb(var(--color-muted-300) / var(--tw-border-opacity));
  border-width: 1px;
  color: rgb(var(--color-muted-700) / 1);
  color: rgb(var(--color-muted-700) / var(--tw-text-opacity));
}
</style>
