module.exports = {
  rules: {
    'dollar-sign': {
      create: function () {
        // rule implementation ...
      },
    },
  },

  configs: {
    // Core configs - When extending, one of these should go first
    core: require('./lib/config/core'),
    es5: require('./lib/config/es5'),
    esnext: require('./lib/config/esnext'),
    typescript: require('./lib/config/typescript'),

    // Augmenting configs - When extending, these go after the core config
    cypress: require('./lib/config/cypress'),
    jest: require('./lib/config/jest'),
    'jest-dom': require('./lib/config/jest-dom'),
    node: require('./lib/config/node'),
    react: require('./lib/config/react'),
    'typescript-type-checking': require('./lib/config/typescript-type-checking'),
    webpack: require('./lib/config/webpack'),
    hardcore: require('./lib/config/hardcore'),

    // My Recipes
    basic: require('./lib/config/recipes/basic'),
    nodest: require('./lib/config/recipes/nodest'),
    reactful: require('./lib/config/recipes/reactful'),
    'react-native': require('./lib/config/recipes/native'),

    // Prettier config - When extending, this must go last
    prettier: require('./lib/config/prettier'),
  },
};
