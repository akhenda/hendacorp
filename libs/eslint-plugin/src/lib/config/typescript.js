module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@shopify/typescript', 'plugin:@hendacorp/esnext'],
  plugins: [],
  rules: {},

  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/order': 'off',
      },
    },
    {
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Number: { message: 'Use `number` instead.', fixWith: 'number' },
              Boolean: { message: 'Use `boolean` instead.', fixWith: 'boolean' },
              Symbol: { message: 'Use `symbol` instead.', fixWith: 'symbol' },
              Object: { message: 'Use `object` instead.', fixWith: 'object' },
              String: { message: 'Use `string` instead.', fixWith: 'string' },
              '{}': { message: 'Use `object` instead.', fixWith: 'object' },
              Array: { message: 'Provide a more specific type' },
            },
            extendDefaults: false,
          },
        ],

        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase'],
          },
          {
            selector: 'variable',
            format: ['PascalCase', 'UPPER_CASE'],
            types: ['boolean'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
          },
          {
            selector: 'variableLike',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          },

          {
            selector: 'parameter',
            format: ['camelCase'],
          },
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'property',
            modifiers: ['readonly'],
            format: ['PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
        ],

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
