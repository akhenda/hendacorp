const nxPreset = require('@nx/jest/preset').default;

module.exports = { ...nxPreset, coverageReporters: ['text', 'text-summary', 'html', 'json', 'json-summary', 'lcov'] };
