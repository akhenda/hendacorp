export default {
  extends: ['plugin:@shopify/react', 'plugin:react/jsx-runtime'],
  plugins: [],
  settings: {
    react: { version: 'detect' },
  },
  overrides: [
    {
      env: { 'cypress/globals': true, node: false },
      extends: ['plugin:jest-dom/recommended', 'plugin:cypress/recommended'],
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      plugins: ['cypress', 'testing-library'],
    },
  ],
  rules: {
    // 'import/prefer-default-export': 'off',
    // 'no-use-before-define': ['off', { classes: false, functions: false }],
    // 'react/function-component-definition': [
    //   'error',
    //   {
    //     namedComponents: ['function-declaration', 'arrow-function'],
    //     unnamedComponents: 'arrow-function',
    //   },
    // ],
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/style-prop-object': [
    //   'error',
    //   {
    //     allow: ['StatusBar'],
    //   },
    // ],
    // 'react/prop-types': 'off', // Since we do not use prop-types
    // 'react/require-default-props': 'off', // Since we do not use prop-types
    // // Don"t explicitly add .js/.jsx/.tsx/.ts extensions
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    // 'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^draft'] }],
  },
};
