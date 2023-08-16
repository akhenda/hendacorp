import { eslintConfig } from './eslint-plugin';

describe('eslintConfig', () => {
  it('should work', () => {
    expect(eslintConfig()).toEqual('eslint-plugin');
  });
});
