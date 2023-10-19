module.exports = {
  extends: ['plugin:@hendacorp/typescript', 'plugin:@shopify/typescript-type-checking', 'plugin:@hendacorp/prettier'],
  env: { node: true },
  plugins: ['@hendacorp'],
  overrides: [
    // {
    //   files: ['*.ts', '*.tsx'],
    //   parserOptions: {
    //     project: 'tsconfig.json',
    //     tsconfigRootDir: __dirname,
    //   },
    // },
    {
      env: { jest: true },
      extends: ['plugin:@hendacorp/jest'],
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
    },
  ],
  rules: {},
};
