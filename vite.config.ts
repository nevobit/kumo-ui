import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import css from 'vite-plugin-css'; // Agrega esta línea
import tsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// @ts-ignore

import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src/**/*', 'src/**/*.css'],
      exclude: ['src/**/*.stories.tsx', 'src/storybook/**/*'],
    }),
  
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  css: {
    modules: {
      scopeBehaviour: 'global'
    },
    postcss: {},
    preprocessorOptions: {
    },
  },

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: "src/index.ts",
      output: {
        entryFileNames: "index.js",
      }
    }
  }
})
