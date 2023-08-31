# eslint-plugin

This library was generated with [Nx](https://nx.dev).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40hendacorp%2Feslint-plugin.svg)](https://badge.fury.io/js/%40hendacorp%2Feslint-plugin.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@hendacorp/eslint-plugin.svg)](https://img.shields.io/bundlephobia/minzip/@hendacorp/eslint-plugin.svg)

ESLint rules and configs.

## Installation

You'll first need to install [ESLint](http://eslint.org):

**With PNPM**

```bash
pnpm add -D eslint
```

**With Yarn**

```bash
yarn add --dev eslint
```

**With npm**

```bash
npm i eslint --save-dev
```

Next, install `@hendacorp/eslint-plugin`:

**With PNPM**

```bash
pnpm add -D @hendacorp/eslint-plugin
```

**With Yarn**

```bash
yarn add --dev @hendacorp/eslint-plugin
```

**With npm**

```bash
npm install @hendacorp/eslint-plugin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@hendacorp/eslint-plugin` globally.

## Usage

Hendacorp’s ESLint configs come bundled in this package. In order to use them, you simply extend the relevant configuration in your project’s `.eslintrc`. For example, the following will extend the ESNext (ES2015 and later) config:

```json
{
  "extends": "plugin:@hendacorp/esnext"
}
```

If you are working on an ES5 project, extend the ES5 version of the configuration:

```json
{
  "extends": "plugin:@hendacorp/es5"
}
```

You can also add some "augmenting" configs on top of the "core" config by extending an array of linting configs. For example, the following configuration would provide a base ESNext config that is augmented by a React config:

```json
{
  "extends": ["plugin:@hendacorp/esnext", "plugin:@hendacorp/react"]
}
```

Likewise, if you are using TypeScript and React, the following configuration extends the TypeScript base config with the React-specific rules provided by the React configuration file. To demonstrate multiple augmentations, we've also added the Prettier config, which disables rules that will conflict in projects using prettier.

```json
{
  "extends": ["plugin:@hendacorp/typescript", "plugin:@hendacorp/react", "plugin:@hendacorp/prettier"]
}
```

## Provided configurations

This plugin provides the following core configurations:

- [esnext](lib/config/esnext.js): Use this for anything written with ES2015+ features.
- [typescript](lib/config/typescript.js): Use this for Typescript projects. The rules enabled in this config do not require type-checking to run. To enable all Typescript rules, you must augment this config with the `typescript-type-checking` config mentioned below.
- [es5](lib/config/es5.js): Use this for legacy projects.

This plugin also provides the following tool-specific configurations, which can be used on top of the core configurations:

- [typescript-type-checking](lib/config/typescript-type-checking.js) Use this config to augment the `typescript` config to enable all TypeScript rules, including those that require type checking. These rules are slower to run and and you will need to specify a path to your tsconfig.json file in the "project" property of "parserOptions". The following example would provide all of the TypeScript rules, assuming the tsconfig.json is in the same directory as you ESlint configuration.

```json
{
  "extends": ["plugin:@hendacorp/typescript", "plugin:@hendacorp/typescript-type-checking"],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

- [react](lib/config/react.js): Use this for React projects.
- [prettier](lib/config/prettier.js): Use [prettier](https://github.com/prettier/prettier) for consistent formatting. Extending this hendacorp's prettier config will [override](https://github.com/prettier/eslint-plugin-prettier/blob/master/index.js) the default hendacorp eslint rules in favor of prettier formatting. Prettier must be installed within your project, as @hendacorp/eslint-plugin does not provide the dependency itself.
- [webpack](lib/config/webpack.js): Use this for projects built by [webpack](https://webpack.js.org/).

### node

If you are working on a node module, we also provide the [node configuration](lib/config/node.js) for you. Note that this configuration needs to be used in conjunction with one of the core configurations (either `es5` or `esnext`). If you plan to transpile your code using Babel, use the `esnext` config. If you do not plan to do so, the config you choose depends on the version of node you wish to support, and how many ESNext features are natively available in that version. You can see a detailed list of what version of node supports what new JavaScript features by visiting <http://node.green>.

A node project that will use Babel for transpilation would need the following ESLint config:

```json
{
  "extends": ["plugin:@hendacorp/esnext", "plugin:@hendacorp/node"]
}
```

### Supported Typescript version

The supported version of TypeScript is constrained by the [@typescipt-eslint parser support](https://github.com/typescript-eslint/typescript-eslint#supported-typescript-version) that is installed.

## Plugin-Provided Rules

This plugin provides the following custom rules, which are included as appropriate in all core linting configs:

- [coming-soon](docs/rules/coming-soon.md): Add custom rules here.

## Suggested additional configs

For applications that use graphql we recommend using the `operations-recommended` preset from [`@graphql-eslint/eslint-plugin`](https://github.com/B2o5T/graphql-eslint). This is not included as part of this plugin because graphql has a large install footprint and not everybody needs it.

## Building

Run `nx build eslint-plugin` to build the library.

## Running unit tests

Run `nx test eslint-plugin` to execute the unit tests via [Jest](https://jestjs.io).
