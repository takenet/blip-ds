import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'blip-ds',
  sourceMap: false,
  plugins: [
    sass({
      includePaths: ['src/globals'],
      injectGlobalPaths: ['src/globals/app.scss', 'node_modules/blip-tokens/build/scss/variables.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'globals', dest: 'styles' },
        { src: '../blip-ds-react/dist', dest: '../blip-ds-react' },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      dir: 'cypress',
      empty: false,
      copy: [{ src: '../dist', dest: 'dist', warn: false }],
    },
    reactOutputTarget({
      componentCorePackage: '../../loader',
      proxiesFile: './blip-ds-react/src/components.ts',
    }),
  ],
  buildEs5: 'prod',
  extras: {
    appendChildSlotFix: true,
    scriptDataOpts: true,
    cloneNodeFix: false,
    slotChildNodesFix: true,
    enableImportInjection: true,
  },
  testing: {
    timers: 'fake',
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
  },
};
