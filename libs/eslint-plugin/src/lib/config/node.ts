export default {
  extends: ['plugin:security/recommended', 'plugin:@shopify/node', 'plugin:n/recommended'],
  env: {
    node: true,
  },
  plugins: ['mongodb'],
  rules: {
    'n/no-missing-import': 'off',
  },
};
