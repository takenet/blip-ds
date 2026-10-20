import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { createAssetGuard } from './scripts/check_asset_bundle.cjs';

export const config: Config = {
  namespace: 'blip-ds',
  rollupPlugins: { before: [createAssetGuard()] },
  plugins: [
    sass({
      includePaths: ['src/globals', 'node_modules'],
      injectGlobalPaths: ['src/globals/helpers.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'globals', dest: 'styles' }],
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'storybook-server/stencil-docs.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      outDir: 'blip-ds-react/src',
      stencilPackageName: 'blip-ds',
    }),
  ],
  buildEs5: true,
  extras: {
    appendChildSlotFix: false,
    scriptDataOpts: true,
    cloneNodeFix: false,
    slotChildNodesFix: false,
    experimentalImportInjection: true,
  },
  testing: {
    browserArgs: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor',
    ],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    testPathIgnorePatterns: ['/node_modules/', '/tests/playwright/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
      '^.+\\.svg$': '<rootDir>/jest.svg-transform.js',
    },
    moduleNameMapper: {
      '^blip-tokens/build/json/(.+)$': '<rootDir>/node_modules/blip-tokens/build/json/$1',
    },
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
  },
};
