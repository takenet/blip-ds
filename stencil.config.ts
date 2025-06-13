import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'blip-ds',
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
    reactOutputTarget({
      componentCorePackage: '../../loader',
      proxiesFile: './blip-ds-react/src/components.ts',
    }),
  ],
  buildEs5: 'prod',
  extras: {
    appendChildSlotFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    cloneNodeFix: false,
    slotChildNodesFix: true,
    experimentalImportInjection: true,
  },
  testing: {
    timers: 'fake',
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}'
    ],
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444,
  },
};
