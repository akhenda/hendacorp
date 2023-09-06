/* eslint-disable */
module.exports = {
  displayName: 'eslint-plugin',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  // moduleFileExtensions: ['ts', 'js', 'html'],
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'json'],
  coverageDirectory: '../../coverage/libs/eslint-plugin',
  testPathIgnorePatterns: ['.*/tests/fixtures/'],
  verbose: true,
};
