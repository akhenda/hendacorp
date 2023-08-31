import { execESLint, fixtureFile } from '../../utils';

describe('config', () => {
  it.skip('has valid plugins and requires', () => {
    expect(
      execESLint(`--ignore-pattern "**/all/build/*" --config ${fixtureFile('all/.eslintrc.js')} ${fixtureFile('all')}`),
    ).toBe('');
  }, 8000);
});
