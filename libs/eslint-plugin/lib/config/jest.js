module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:jest-formatting/recommended', 'plugin:@shopify/jest'],
  env: {
    'jest/globals': true,
  },
  plugins: ['@hendacorp'],
  rules: {},
};
