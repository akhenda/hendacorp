export default {
  extends: ['plugin:prettier/recommended', 'plugin:@shopify/prettier'],
  plugins: [],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
        tabWidth: 2,
        printWidth: 120,
        arrowParens: 'always',

        // below line is for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
  },
};
