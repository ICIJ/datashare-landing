import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'

import { PhosphorVueResolver } from './bin/resolvers'
import { PhosphorVuePreset } from './bin/presets'
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          'image-mode': ['src'],
          'image-mode-source': ['src'],
          'b-img': ['src'],
          source: ['src'],
          video: ['src', 'poster'],
          img: ['src']
        }
      }
    }),
    vueDevTools(),
    /**
     * The "Components" plugin resolvers imports automatically component in vue
     * templates For PhosphorVueResolver we use an homemade resolver
     * that simply imports icons (example: `<ph-plus>`).
     */
    Components({
      resolvers: [BootstrapVueNextResolver(), PhosphorVueResolver()]
    }),
    /**
     * The "AutoImport" plugin offer a mechanism similar to the "Components" plugins
     * but it targets javascript variable and references. This allows to imports component
     * directly in `<script setup>` or in vue template ref (example: `<component :is="PhPlus" />`)
     */
    AutoImport({
      dts: false,
      vueTemplate: true,
      imports: [PhosphorVuePreset()],
      resolvers: [PhosphorVueResolver()]
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
