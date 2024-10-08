// https://www.thisdot.co/blog/linting-formatting-and-type-checking-commits-in-an-nx-monorepo-with-husky
module.exports = {
  '{apps,libs,tools}/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },

  '{apps,libs,packages,tools}/**/*.{js,ts,jsx,tsx,json,md,html,css,scss}': [
    (files) => `nx affected --target=lint --fix --files=${files.join(',')}`,
    // (files) => `nx affected --target=test --files=${files.join(',')}`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],
};
