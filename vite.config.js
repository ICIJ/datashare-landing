import { resolve } from 'path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  test: {
    globals: true,
    reporter: "basic",
    environment: "jsdom",
  },
  server: {
    host: "0.0.0.0",
    port: 9009,
  },
  plugins: [
    vuePlugin({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    alias: {
      node_modules: resolve(__dirname, "node_modules"),
      '@src': resolve(__dirname, "src")
    },
  },
})