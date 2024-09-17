module.exports = {
    env: {
      node: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb-base'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: [
      '@typescript-eslint'
    ],
    rules: {
      'no-console': 'off', // Allow console logs (adjust as necessary)
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          js: 'never'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off', // Allow usage of 'any' type (adjust as necessary)
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts']
        }
      }
    }
  };
  