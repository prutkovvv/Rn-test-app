module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'esnext',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', '@typescript-eslint/tslint', 'import'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'react-native/no-inline-styles': 'off',
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'no-throw-literal': 'off',
    'no-case-declarations': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/ban-types': 'warn',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-async-promise-executor': 'warn',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'import/no-cycle': 'off',
    'no-unused-expressions': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'react/destructuring-assignment': 'off',
    'no-prototype-builtins': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-named-as-default': 'off',
    'no-bitwise': 'off',
    'react/no-array-index-key': 'warn',
    'react/function-component-definition': 'off',
    radix: 'warn',
    camelcase: 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'react/jsx-no-bind': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'prefer-promise-reject-errors': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/require-default-props': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../../*'],
      },
    ],
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          'ordered-imports': [
            true,
            {
              'module-source-path': 'full',
              'grouped-imports': true,
              'import-sources-order': 'any',
              groups: [
                {
                  match: '^@?(react|redux)',
                  order: 1,
                },
                {
                  name: 'Root',
                  match: '^@(root|src)',
                  order: 60,
                },
                {
                  name: 'Packages',
                  match: '^[^\\.]',
                  order: 50,
                },
                {
                  name: 'Parent directory',
                  match: '^[.][.]',
                  order: 80,
                },
                {
                  name: 'Current directory',
                  match: '^[.]',
                  order: 90,
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
