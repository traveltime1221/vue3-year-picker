import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'node:path';

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'), // 改成 index.ts
      name: 'vue3CustomeBtn',
      fileName: (format) => `vue3-year-picker.${format}.js`,
      formats: ['es', 'umd', 'cjs'] // 確保支援不同格式
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
