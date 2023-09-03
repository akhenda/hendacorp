module.exports = {
  extends: [
    'plugin:@hendacorp/typescript',
    'plugin:@shopify/typescript-type-checking',
    'plugin:@hendacorp/react',
    'plugin:@hendacorp/prettier',
  ],
  env: { browser: true },
  plugins: ['@hendacorp'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    {
      env: { jest: true },
      extends: ['plugin:@hendacorp/jest-dom', 'plugin:@hendacorp/cypress'],
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
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
    // // Don't explicitly add .js/.jsx/.tsx/.ts extensions
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
