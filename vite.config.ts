// / <reference types="vitest" />

import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import {UserConfig} from 'vite';

import {resolve} from './src/helpers/utils';

const config: UserConfig = {
  plugins: [vue(), ssr()],
  resolve: {
    alias: {
      '@': resolve('/src'),
      '@components': resolve('/src/components'),
      '@composables': resolve('/src/composables'),
      '@pages': resolve('/pages'),
      '@assets': resolve('/assets'),
      '@styles': resolve('/assets/styles'),
      '@helpers': resolve('/assets/helpers'),
    },
  },
};

export default config;
