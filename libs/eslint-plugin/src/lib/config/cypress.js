module.exports = {
  extends: ['plugin:cypress/recommended'],
  env: {
    'cypress/globals': true,
  },
  plugins: ['@hendacorp', 'cypress', 'testing-library'],
  rules: {},
};
