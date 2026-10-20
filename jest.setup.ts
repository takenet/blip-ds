/* eslint-disable */

const originalSetTimeout = global.setTimeout;
const originalSetInterval = global.setInterval;
const originalClearTimeout = global.clearTimeout;
const originalClearInterval = global.clearInterval;
const originalConsoleWarn = console.warn;
const originalNewTestPage = (global as any).__NEW_TEST_PAGE__;

if (originalNewTestPage) {
  const config = require('./src/utils/asset-config.json');
  const assetRoot = new URL(config.assetRoot);
  const paths = new Set(Object.values(config.assets).map((value: string) => new URL(value, assetRoot).href));
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h8v8H2z"/><path fill="#006eff" d="M12 12h8v8h-8z"/></svg>';
  (global as any).__NEW_TEST_PAGE__ = async () => {
    const page = await originalNewTestPage();
    const session = await page.createCDPSession();
    await session.send('Fetch.enable', { patterns: [{ urlPattern: `${assetRoot.origin}/*` }] });
    session.on('Fetch.requestPaused', async ({ requestId, request }) => {
      const found = paths.has(request.url);
      await session.send('Fetch.fulfillRequest', {
        requestId,
        responseCode: found ? 200 : 404,
        responseHeaders: [
          { name: 'content-type', value: 'image/svg+xml' },
          { name: 'access-control-allow-origin', value: '*' },
        ],
        body: Buffer.from(found ? svg : '').toString('base64'),
      });
    });
    return page;
  };
}

beforeEach(() => {
  jest.clearAllTimers();

  // Only apply timer mocking to unit tests (.spec.ts), not e2e tests (.e2e.ts)
  // E2e tests run in a real browser and need real timers for animations
  const testPath = expect.getState().testPath;
  const isE2eTest = testPath && testPath.includes('.e2e.ts');

  if (!isE2eTest) {
    // Mock timers to prevent setTimeout issues in unit tests
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
  }

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
  
  // Only restore timers if we're not in an e2e test
  const testPath = expect.getState().testPath;
  const isE2eTest = testPath && testPath.includes('.e2e.ts');
  
  if (!isE2eTest) {
    global.setTimeout = originalSetTimeout;
    global.setInterval = originalSetInterval;
    global.clearTimeout = originalClearTimeout;
    global.clearInterval = originalClearInterval;
  }
  
  global.console.warn = originalConsoleWarn;
});
