import react from '@vitejs/plugin-react'
import { defineConfig, UserConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  envPrefix: 'REACT_APP',
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    proxy: {
      '/api/v1': {
        target:
          'https://api.mockfly.dev/mocks/c9842c6c-cf70-4df4-b471-b645ea9048c1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, ''),
      },
    },
  },
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
} satisfies UserConfig)
