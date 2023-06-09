<template>
  <div class="flex items-center gap-2 h-16">
    <label
      class="nui-focus relative hidden dark:block h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-2 dark:ring-offset-muted-900"
      ><input
        type="checkbox"
        class="absolute start-0 top-0 z-[2] h-full w-full cursor-pointer opacity-0"
      /><span
        class="bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700 relative block h-9 w-9 rounded-full"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300 -translate-y-1/2 translate-x-[-45%] opacity-100 rtl:translate-x-[45%]"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            class="stroke-2"
          ></path>
        </svg>
      </span>
    </label>
    <label
      class="nui-focus relative block dark:hidden h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-2 dark:ring-offset-muted-900"
      ><input
        type="checkbox"
        class="absolute start-0 top-0 z-[2] h-full w-full cursor-pointer opacity-0"
      /><span
        class="bg-white dark:bg-muted-800 border border-muted-300 dark:border-muted-700 relative block h-9 w-9 rounded-full"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300 -translate-y-1/2 translate-x-[-50%] opacity-100 rtl:translate-x-[50%]"
        >
          <g fill="currentColor" stroke="currentColor" class="stroke-2">
            <circle cx="12" cy="12" r="5"></circle>
            <path
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            ></path>
          </g>
        </svg>
      </span>
    </label>
    <!--]--><!--]-->
  </div>
</template>

<script>
export default {
  name: "DarkMode",
};
</script>

<style lang="scss" scoped></style>
