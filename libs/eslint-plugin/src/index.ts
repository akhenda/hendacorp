export default {
  rules: {
    'dollar-sign': {
      create: function () {
        // rule implementation ...
      },
    },
  },

  configs: {
    // Core configs - When extending, one of these should go first
    core: require('./lib/config/core.ts'),
    es5: require('./lib/config/es5'),
    esnext: require('./lib/config/esnext'),
    typescript: require('./lib/config/typescript'),

    // Augmenting configs - When extending, these go after the core config
    jest: require('./lib/config/jest'),
    node: require('./lib/config/node'),
    react: require('./lib/config/react'),
    'typescript-type-checking': require('./lib/config/typescript-type-checking'),
    webpack: require('./lib/config/webpack'),
    hardcore: require('./lib/config/hardcore'),

    // Prettier config - When extending, this must go last
    prettier: require('./lib/config/prettier'),
  },
};
