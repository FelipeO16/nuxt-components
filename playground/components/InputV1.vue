<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl relative z-10 p-6"
  >
    <div class="mb-4 text-center">
      <h3
        class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"
      >
        Customer
      </h3>
    </div>
    <div class="relative">
      <div class="relative">
        <!---->
        <div class="group/nui-input relative">
          <input
            id="ninja-input-84"
            type="text"
            class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-xl h-12 text-base !ps-12"
            placeholder="ex: Figma, Github, ..."
          />
          <div
            class="text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75 h-10 w-10 h-12 w-12"
          >
            <svg
              data-v-cd102a71=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="icon h-[1.15rem] w-[1.15rem]"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21l-4.35-4.35"></path>
              </g>
            </svg>
          </div>
          <!---->
        </div>
      </div>
      <div
        class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300 opacity-0 pointer-events-none translate-y-1"
      >
        <!---->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FirstTest",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
});
</script>
