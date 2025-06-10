import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'blip-ds',
  plugins: [
    sass({
      includePaths: ['src/globals', 'node_modules'],
      injectGlobalPaths: ['src/globals/app.scss'],
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
      outDir: './blip-ds-react/src',
    }),
  ],
  buildEs5: 'prod',
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    cloneNodeFix: false,
    slotChildNodesFix: true,
    experimentalImportInjection: true,
  },
  testing: {
    timers: 'fake',
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
  },
};
