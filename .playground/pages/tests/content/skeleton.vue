<script setup lang="ts">
definePageMeta({
  title: 'Skeleton',
  icon: 'ph:align-center-horizontal-simple-duotone',
  description: 'SVG icons',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Skeleton
      </BaseHeading>
    </div>
    <div class="flex gap-2">
      <div
        class="nui-placeload animate-nui-placeload w-20 h-20 rounded-full"
      ></div>
      <div class="nui-placeload animate-nui-placeload w-96 h-20"></div>
    </div>
  </div>
</template>
