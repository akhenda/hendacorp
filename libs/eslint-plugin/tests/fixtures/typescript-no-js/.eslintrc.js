module.exports = {
  extends: ['plugin:@hendacorp/typescript', 'plugin:@hendacorp/node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
