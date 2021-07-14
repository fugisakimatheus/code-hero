module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'prefer-spread': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'no-const-assign': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'react-native/no-inline-styles': 0,
    'constructor-super': 'error',
    'valid-typeof': 'error',
    'consistent-return': 'off',
    'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    '@typescript-eslint/no-empty-function':  ['error', { 'allow': ['arrowFunctions'] }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
  },
}