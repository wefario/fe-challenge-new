import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import type { InlineConfig } from 'vitest'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  envPrefix: 'REACT_APP',
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  test: {
    globals: true,
    testTimeout: 10000,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    // @see https://github.com/vitest-dev/vitest/issues/3816
    pool: 'forks',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
    },
  },
} satisfies VitestConfigExport)
