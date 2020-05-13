module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/camelcase": "off",
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
};
