import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
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
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
    vitePluginCssModules,
    loadCssModulePlugin
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  build: {
    lib:{
      entry: path.resolve("src", "index.ts"),
      name: "kumo-ui",
      formats: ['es', 'cjs'],
      fileName: (format) => 
      `kumo-ui.${
        format === 'cjs' ? "cjs" : "es.js"
      }`,
    },
  },
  optimizeDeps: {
    exclude: Object.keys(packageJson.peerDependencies),
  },
  // esbuild: {
  //   minify: true
  // }
})
