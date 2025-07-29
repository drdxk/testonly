import {defineConfig} from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.ts'],

    environment: 'node',

    globals: true,

    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },

  esbuild: {
    target: 'node22',
  },
});
