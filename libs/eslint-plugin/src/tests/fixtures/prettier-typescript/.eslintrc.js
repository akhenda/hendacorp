module.exports = {
  extends: ['plugin:@hendacorp/typescript', 'plugin:@hendacorp/prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
