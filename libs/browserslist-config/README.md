# browserslist-config

This library was generated with [Nx](https://nx.dev).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40hendacorp%2Fbrowserslist-config.svg)](https://badge.fury.io/js/%40hendacorp%2Fbrowserslist-config.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@hendacorp/browserslist-config.svg)](https://img.shields.io/bundlephobia/minzip/@hendacorp/browserslist-config.svg) ![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/akhenda/e87e6f67fa5b4ffc5757bc946b8db87a/raw/41577255440d2cd5f08613f44686f82728d425b4/coverage-libs-browserslist-config.json)

Shareable [browserslist](https://github.com/ai/browserslist) configuration.

## Supported Browsers

| Browser                     | Version |
| --------------------------- | ------- |
| Chrome & Chrome for Android | last 3  |
| Firefox                     | last 3  |
| Opera                       | last 3  |
| Edge                        | last 3  |
| Safari                      | last 3  |
| iOS                         | >= 13.4 |

You can list all supported browsers by running `npx browserslist "last 1 firefoxandroid versions, last 3 chrome versions, last 3 chromeandroid versions, last 3 firefox versions, last 3 opera versions, last 3 edge versions, last 3 safari versions, ios >= 13.4"`

## Installation

Install the module.

```shell
pnpm add -D @hendacorp/browserslist-config
```

## Usage

### package.json

```json
{
  "browserslist": ["extends @hendacorp/browserslist-config"]
}
```

## Building

Run `nx build browserslist-config` to build the library.

## Running unit tests

Run `nx test browserslist-config` to execute the unit tests via [Jest](https://jestjs.io).
