module.exports = {
  extends: ['plugin:@shopify/core'],
  plugins: ['@hendacorp'],
  settings: {},
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error', 'table'] }],
  },
};
