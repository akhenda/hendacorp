# prettier-config

This library was generated with [Nx](https://nx.dev).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40hendacorp%2Fprettier-config.svg)](https://badge.fury.io/js/%40hendacorp%2Fprettier-config.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@hendacorp/prettier-config.svg)](https://img.shields.io/bundlephobia/minzip/@hendacorp/prettier-config.svg) ![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/akhenda/e87e6f67fa5b4ffc5757bc946b8db87a/raw/41577255440d2cd5f08613f44686f82728d425b4/coverage-libs-browserslist-config.json)

Shared prettier configuration

## Installation

```bash
pnpm add -D @hendacorp/prettier-config
```

## Usage

hendacorp’s shared prettier config comes bundled in `@hendacorp/prettier-config`. To enable these rules, add a `prettier` property in your `package.json` and reference this shared config as follows:

```json
"prettier": "@hendacorp/prettier-config"
```

Previously, rules had been defined directly in a `.prettierrc` or `package.json`

Any previous `.prettierrc` should be removed in favour of the shared config.

## Building

Run `nx build prettier-config` to build the library.
