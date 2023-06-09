<template>
  <div>
    <div class="md:max-w-lg">
      <div
        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 block overflow-hidden border bg-white"
        :class="
          shape === 'rounded'
            ? 'rounded-md'
            : shape === 'straight'
            ? 'rounded-none'
            : shape === 'curved'
            ? 'rounded-xl'
            : ''
        "
      >
        <details
          v-for="(item, index) in items"
          :key="index"
          class="border-muted-200 dark:border-muted-700 border-t"
          :class="{ 'is-active': activeDetails == index }"
          @click="handleToggle(index)"
        >
          <summary
            class="group/nui-accordion cursor-pointer list-none outline-none"
            tabindex="0"
          >
            <div class="flex items-center justify-between p-5">
              <h4
                class="font-heading text-sm font-semibold leading-none text-muted-800 dark:text-white"
              >
                {{ item.title }}
              </h4>

              <div
                v-if="action === 'plus'"
                :class="
                  activeDetails == index
                    ? ' text-primary-500 rotate-45'
                    : ' text-muted-400'
                "
                class="group-focus/nui-accordion:outline-muted-200 dark:group-focus/nui-accordion:outline-muted-700 border-muted-200 dark:border-muted-700 dark:bg-muted-700/60 ms-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-all duration-300 group-focus/nui-accordion:outline-dashed group-focus:outline-offset-2"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v14m-7-7h14"
                  />
                </svg>
              </div>
              <div
                v-else-if="action === 'chevron'"
                :class="
                  activeDetails == index
                    ? 'text-primary-500 rotate-180'
                    : 'text-muted-400'
                "
                class="group-focus/nui-accordion:outline-muted-200 dark:group-focus/nui-accordion:outline-muted-700 border-muted-200 dark:border-muted-700 dark:bg-muted-700/60 ms-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-all duration-300 group-focus/nui-accordion:outline-dashed group-focus/nui-accordion:outline-offset-2"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </div>
              <div
                v-else
                class="group-focus/nui-accordion:outline-muted-200 dark:group-focus/nui-accordion:outline-muted-700 ms-2 h-3 w-3 rounded-full transition-colors duration-300 group-focus/nui-accordion:outline-dashed group-focus/nui-accordion:outline-offset-2"
                :class="
                  activeDetails == index
                    ? 'bg-primary-500 dark:bg-primary-400'
                    : 'bg-muted-300 dark:bg-muted-700'
                "
              />
            </div>
          </summary>
          <div class="px-5 pb-5">
            <p
              class="font-alt text-base font-normal leading-tight text-muted-500 dark:text-muted-400"
            >
              {{ item.content }}
            </p>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  items: Array<{
    title: string;
    content: string;
  }>;
  shape?: "rounded" | "straight" | "curved" | undefined;
  action?: "plus" | "dot" | "chevron" | undefined;
  exclusive?: boolean;
}>();

const activeDetails = ref<number | null>(null);

function handleToggle(detailsId: number) {
  if (activeDetails.value === detailsId) {
    activeDetails.value = null;
    return;
  }
  if (props.exclusive) {
    const allDetails = document.querySelectorAll("details");
    allDetails.forEach((details) => {
      details.open = false;
    });
  }

  activeDetails.value = detailsId;
}
</script>
