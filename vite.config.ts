import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import VitePluginCSS from 'vite-plugin-css'; // Agrega esta línea
import tsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import vitePluginCssModules from "vite-plugin-css-modules";
import loadCssModulePlugin from 'vite-plugin-load-css-module'
// @ts-ignore

import * as packageJson from "./package.json";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],

  css: {
    modules: {
      scopeBehaviour: 'global'
    }
  },


})
