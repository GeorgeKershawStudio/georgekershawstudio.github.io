export default {
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp"
    }
  }
}
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        istd: resolve(__dirname, 'istd.html'),
        edin: resolve(__dirname, 'edin-council.html'),
        octibook: resolve(__dirname, 'octibook.html'),
        birmingham2022: resolve(__dirname, 'birmingham2022.html'),
        patd: resolve(__dirname, 'patd.html'),
        // one line per HTML file
      }
    }
  }
})