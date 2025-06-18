/* eslint-disable */

const originalSetTimeout = global.setTimeout;
const originalSetInterval = global.setInterval;
const originalClearTimeout = global.clearTimeout;
const originalClearInterval = global.clearInterval;
const originalConsoleWarn = console.warn;

beforeEach(() => {
  jest.clearAllTimers();

  // Mock timers to prevent setTimeout issues in tests
  // https://github.com/stenciljs/core/issues/3292

  global.setTimeout = jest.fn((fn, _delay) => {
    if (typeof fn === 'function') {
      // Execute immediately for tests
      fn();
    }
    return 1 as any;
  }) as any;
  global.setInterval = jest.fn((fn, _delay) => {
    if (typeof fn === 'function') {
      // Execute immediately and only once for tests
      fn();
    }
    return 1 as any;
  }) as any;
  global.clearTimeout = jest.fn();
  global.clearInterval = jest.fn();

  // Mock console.warn to prevent immutable warnings in tests
  // https://github.com/stenciljs/core/issues/2832
  global.console.warn = (...args: any[]) => {
    const arg1 = args[0];
    if (typeof arg1 === "string" && arg1.includes("stenciljs.com/docs/properties#prop-mutability"))
      return undefined;

    originalConsoleWarn(...args);
  }
});

afterEach(() => {
  jest.clearAllTimers();
  global.setTimeout = originalSetTimeout;
  global.setInterval = originalSetInterval;
  global.clearTimeout = originalClearTimeout;
  global.clearInterval = originalClearInterval;
  global.console.warn = originalConsoleWarn;
});
