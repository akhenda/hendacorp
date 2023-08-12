import { browserslistConfig } from './';

describe('browserslistConfig', () => {
  it('should work', () => {
    const browsers = browserslistConfig();
    expect(browsers.at(0)).toContain('last 3 chrome');
  });
});
