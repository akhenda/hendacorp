module.exports = {
  extends: ['plugin:security/recommended-legacy', 'plugin:@shopify/node', 'plugin:n/recommended'],
  env: {
    node: true,
  },
  plugins: ['mongodb'],
  rules: {
    'n/no-missing-import': 'off',
  },
};
