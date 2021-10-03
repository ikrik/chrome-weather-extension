const path = require('path');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'react-app',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'enforce-ids-in-jsx',
    'json',
    'jsx-a11y',
    'no-relative-import-paths',
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'testing-library',
  ],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true,
      },
    ],
    'enforce-ids-in-jsx/unique-ids': 'error',
    'enforce-ids-in-jsx/missing-ids': [
      'error',
      {
        target: ['none'],
        targetCustom: ['TextField', 'Select'],
        priorityOverSpread: false,
      },
    ],    
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-alert': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console':
      process.env.NODE_ENV === 'production' ? ['error', { allow: ['error'] }] : ['warn', { allow: ['error'] }],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/display-name': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 0,
    'jest/no-export': 0,
    'jest/no-hooks': 0,
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', { ignoreDeclarationMerge: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-shadow': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*']        
      },
    ],
  },
  globals: {    
    React: 'readonly',
    NodeJS: 'readonly',
    JSX: 'readonly',
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};