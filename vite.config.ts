import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  base: '/',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'image-mode': ['src'],
          'image-mode-source': ['src'],
          'b-img': ['src'],
          'source': ['src'],
          'video': ['src', 'poster'],
          'img': ['src']
        }
      }
    }),
    vueDevTools(),
    /**
     * The "Components" plugin resolvers imports automatically component in vue
     * templates. IconsResolver auto-imports icons using `<i-ph-*>` syntax.
     */
    Components({
      resolvers: [
        BootstrapVueNextResolver(),
        IconsResolver({ prefix: 'i', enabledCollections: ['ph'] })
      ]
    }),
    /**
     * The "AutoImport" plugin offer a mechanism similar to the "Components" plugins
     * but it targets javascript variable and references.
     */
    AutoImport({
      dts: false,
      vueTemplate: true,
      imports: [],
      resolvers: [IconsResolver({ prefix: 'i', enabledCollections: ['ph'] })]
    }),
    /**
     * The "Icons" plugin generates icon components from Iconify collections.
     * Icons are used via <i-{collection}-{icon}> syntax (e.g., <i-ph-user />).
     */
    Icons({
      scale: 1.25,
      compiler: 'vue3',
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api'],
        api: 'modern',
        additionalData: `
            @use 'sass:math';
            @use 'sass:color';
            @import "@/utils/settings.scss";
          `
      }
    }
  }
})
