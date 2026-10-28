import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';

export default [
  // Base configuration for all files
  js.configs.recommended,

  {
    files: ['scripts/**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        __dirname: 'readonly',
        AbortSignal: 'readonly',
        Buffer: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        Response: 'readonly',
        URL: 'readonly',
      },
    },
  },

  {
    files: ['storybook-server/**/*.mjs'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
        URL: 'readonly',
        Request: 'readonly',
      },
    },
  },
  
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
      prettier,
      storybook,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      
      // Custom rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/camelcase': 'off',
      'no-console': ['error'],
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
      'storybook-server/stencil-docs.d.ts',
      'src/**',
      "storybook-static",
      "jest.setup.ts",
      "jest.svg-transform.js",
      "tests/playwright/**",
      "playwright.config.ts"
    ],
  },
];
