module.exports = {
  extends: [
    'plugin:@hendacorp/reactful',
  ],
  plugins: ['@hendacorp'],
  rules: {
    'react/style-prop-object': [
      'error',
      {
        allow: ['StatusBar'],
      },
    ],
  },
};
