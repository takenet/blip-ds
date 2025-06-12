module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
// https://github.com/storybookjs/storybook-addon-console/issues/86
//    '@storybook/addon-console',
    'storybook/actions',
  ],
  typescript: {
    reactDocgen: false,
    skipBabel: true,
    check: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    defaultName: 'Vis\xE3o Geral'
  },
  staticDirs: ['../dist'], // Include the Stencil build output
  // Configure webpack to resolve blip-ds imports and handle JSX
  webpackFinal: async (config) => {
    // Add alias to resolve blip-ds imports to the dist directory
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['blip-ds'] = require('path').resolve(__dirname, '../');
    config.resolve.alias['blip-ds/dist'] = require('path').resolve(__dirname, '../dist');
    
    // Remove TypeScript checker to avoid TypeScript errors during build
    config.plugins = config.plugins.filter(plugin => {
      return plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin';
    });

    // Add JSX support for .js and .jsx files
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', {
              runtime: 'automatic' // This enables automatic JSX runtime
            }]
          ]
        }
      }
    });
    
    return config;
  },
  // Use managerWebpack for base path configuration instead of webpackFinal
  managerWebpack: async (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.output = config.output || {};
      config.output.publicPath = process.env.STORYBOOK_BASE_PATH;
    }
    return config;
  },
};
