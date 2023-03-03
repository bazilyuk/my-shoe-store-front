module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    'no-console': 'error',
    quotes: [2, 'single', { avoidEscape: true }],
    'no-return-await': 'error',
    curly: 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'eol-last': ['warn', 'always'],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
