const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const prettier = require('eslint-plugin-prettier');
const storybook = require('eslint-plugin-storybook');

module.exports = [
  // Base configuration for all files
  js.configs.recommended,
  
  // TypeScript and React configuration
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      prettier,
      storybook,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      
      // Custom rules
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/camelcase': 'off',
      'no-console': ['error'],
    },
    settings: {
      react: {
        pragma: 'h',
        version: 'detect',
      },
    },
  },
  
  // Storybook specific configuration
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    plugins: {
      storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
    },
  },
  
  // Ignore patterns (replaces .eslintignore)
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'www/**',
      'loader/**',
      'coverage/**',
      '**/*.js',
      '**/*.jsx',
      'blip-ds-react/**',
      'src/**',
      "storybook-static",
      "jest.setup.ts",
      "jest.svg-transform.js"
    ],
  },
];