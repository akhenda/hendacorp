export default {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:lodash/recommended',
    'plugin:@shopify/esnext',
    'plugin:@hendacorp/core',
  ],
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: [
    '@babel/eslint-plugin',
    'promise',
    'sort-class-members',
    'import',
    'simple-import-sort',
    'lodash',
    'deprecate',
    'sort-keys-fix',
    'unused-imports',
    // 'write-good-comments',
  ],
  settings: {
    'import/ignore': ['node_modules', '\\.s?css'],
  },
  rules: {
    'sort-keys-fix/sort-keys-fix': 'warn',

    // Configure simple sorting of imports
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',

    // Support deprecate rules
    'deprecate/function': ['error', { name: 'legacyFunc', use: 'newFunc from this package' }],
    'deprecate/member-expression': ['error', { name: 'React.createClass', use: 'native es6 classes' }],
    'deprecate/import': [
      'error',
      { name: 'path/to/legacyModule', use: 'newModule' },
      { nameRegExp: '\\.sss', use: 'css imports' },
    ],

    // import rules
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    'lodash/prefer-lodash-method': 'off',

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              // Packages. `react` related packages come first.
              ['^react', '^@?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Internal packages.
              [
                '^(~|@|@root|@src|@types|@assets|@config|@components|@hooks|@screens|@pages|@services|@store|@state|@utils|@theme|@navigation|@redux|@helpers|@api|@models|@controllers|@middleware|@workers|@HOCs|@containers|@models|@providers)(/.*|$)',
              ],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
};
