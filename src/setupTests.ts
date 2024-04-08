import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
// @see https://github.com/testing-library/jest-dom/issues/439#issuecomment-1536524120
declare module 'vitest' {
  interface JestAssertion<T>
    extends jest.Matchers<void, T>,
      matchers.TestingLibraryMatchers<T, void> {}
}

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
