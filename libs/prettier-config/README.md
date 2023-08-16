# prettier-config

This library was generated with [Nx](https://nx.dev).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40hendacorp%2Fprettier-config.svg)](https://badge.fury.io/js/%40hendacorp%2Fprettier-config.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@hendacorp/prettier-config.svg)](https://img.shields.io/bundlephobia/minzip/@hendacorp/prettier-config.svg)

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
