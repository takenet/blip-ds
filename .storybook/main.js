module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-console',
    // '@storybook/addon-notes', // Remove this as it's causing compatibility issues
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    reactDocgen: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Visão Geral'
  },
  staticDirs: ['../dist'], // Include the Stencil build output
  // Use managerWebpack for base path configuration instead of webpackFinal
  managerWebpack: async (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.output = config.output || {};
      config.output.publicPath = process.env.STORYBOOK_BASE_PATH;
    }
    return config;
  },
};
