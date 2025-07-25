import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'blip-ds',
  plugins: [
    sass({
      includePaths: ['src/globals', 'node_modules'],
      injectGlobalPaths: ['src/globals/helpers.scss'],
      importer: (url) => {
        // Handle ~ prefix for node_modules imports
        if (url.startsWith('~')) {
          const modulePath = url.substring(1);
          return {
            file: `node_modules/${modulePath}`,
          };
        }
        return null;
      },
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
    appendChildSlotFix: true,
    scriptDataOpts: true,
    cloneNodeFix: false,
    slotChildNodesFix: true,
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
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
      '^.+\\.svg$': '<rootDir>/jest.svg-transform.js',
    },
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
  },
};
