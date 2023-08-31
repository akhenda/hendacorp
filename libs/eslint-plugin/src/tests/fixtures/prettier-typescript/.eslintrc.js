const plugin = require('@hendacorp/eslint-plugin');

console.log('====================================');
console.log({ plugin });
console.log('====================================');

module.exports = {
  extends: ['plugin:@hendacorp/typescript', 'plugin:@hendacorp/prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
