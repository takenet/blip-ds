module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    disableTelemetry: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    'storybook/actions',
    '@storybook/addon-mcp'
  ],
  features: {
    experimentalComponentsManifest: true,
  },
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
    defaultName: 'Visão Geral'
  },
  staticDirs: [
    { from: '../dist', to: '/dist' },
    { from: '../src/assets', to: '/assets' }
  ],
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

    // Exclude source map files from being processed by adding to ignorePattern
    const existingRule = config.module.rules.find(rule => 
      rule.test && rule.test.toString().includes('js') && rule.exclude
    );
    
    if (existingRule && Array.isArray(existingRule.exclude)) {
      existingRule.exclude.push(/\.map$/);
    } else if (existingRule) {
      existingRule.exclude = [existingRule.exclude, /\.map$/];
    }

    // Add rule to handle source map files properly
    config.module.rules.unshift({
      test: /\.map$/,
      type: 'asset/resource',
      generator: {
        emit: false
      }
    });

    // Add JSX support for .js and .jsx files
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/, /\.map$/],
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
