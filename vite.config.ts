import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
// import * as packageJson from "./package.json";
import VitePluginCSS from 'vite-plugin-css'; // Agrega esta línea

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'global'
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  // optimizeDeps: {
  //   exclude: Object.keys(packageJson.peerDependencies),
  // },
  // esbuild: {
  //   minify: true
  // }
})
