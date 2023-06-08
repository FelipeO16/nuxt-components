import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addTemplate,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-pui",
    configKey: "nuxtComponents",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
    //add component
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: resolver.resolve("./runtime/components"),
        prefix: "pui-",
      });
    });
    nuxt.hook("tailwindcss:resolvedConfig", (config) => {
      addTemplate({
        filename: "tailwind.config.cjs", // gets prepended by .nuxt/
        getContents: () => `module.exports = ${JSON.stringify(config)}`,
        write: true,
      });
    });
  },
});
