import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
// import * as packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
