module.exports = {
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  extends: [
    'plugin:@hendacorp/core',
    'plugin:@hendacorp/es5',
    'plugin:@hendacorp/esnext',
    'plugin:@hendacorp/typescript',

    // Augmenting configs - When extending, these go after the core config
    'plugin:@hendacorp/cypress',
    'plugin:@hendacorp/jest',
    'plugin:@hendacorp/jest-dom',
    'plugin:@hendacorp/node',
    'plugin:@hendacorp/react',
    'plugin:@hendacorp/webpack',

    // Prettier config - When extending, this must go last
    'plugin:@hendacorp/prettier',
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "sort-keys-fix/sort-keys-fix": "off"
  },
};
