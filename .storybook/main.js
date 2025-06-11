module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-console',
    '@storybook/addon-notes',
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
  // Add base path configuration for subdirectory deployment
  ...(process.env.STORYBOOK_BASE_PATH && {
    managerHead: (head) => `
      ${head}
      <base href="${process.env.STORYBOOK_BASE_PATH}">
    `,
    webpackFinal: async (config) => {
      config.output = config.output || {};
      config.output.publicPath = process.env.STORYBOOK_BASE_PATH;
      return config;
    },
  }),
};
