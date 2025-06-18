---
applyTo: "**/*.e2e.ts,**/*.spec.ts,**/*.test.ts"
---

To run all tests, use:

```bash
npm run test
```

To run a only unit tests, use:

```bash
npm run test:unit
```

To run a only e2e tests, use:

```bash
npm run test:e2e
```

To run a specific test file, use:

```bash
# All tests:
npm run test <test-file-path>
# Unit tests:
npm run test:unit <test-file-path>
# E2e tests:
npm run test:e2e <test-file-path>
```

> Stencil can not run tests using fake timers, so DO NOT USE fake timers in tests.
> Only for reference: https://github.com/stenciljs/core/issues/3292
>
> We currently implemented a workaround for this on the <rootDir>/jest.setup.js file, mocking setTimeout and setInterval functions.
