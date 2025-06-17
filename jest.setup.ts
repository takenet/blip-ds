/* eslint-disable */
// Mock timers to prevent setTimeout issues in tests
// https://github.com/stenciljs/core/issues/3292

const originalSetTimeout = global.setTimeout;
const originalSetInterval = global.setInterval;
const originalClearTimeout = global.clearTimeout;
const originalClearInterval = global.clearInterval;

beforeEach(() => {
  jest.clearAllTimers();
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
});

afterEach(() => {
  jest.clearAllTimers();
  global.setTimeout = originalSetTimeout;
  global.setInterval = originalSetInterval;
  global.clearTimeout = originalClearInterval;
  global.clearInterval = originalClearInterval;
});
