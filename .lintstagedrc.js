module.exports = {
  // '{apps,libs,packages,tools}/**/*.{ts,tsx}': files => {
  //   return `nx affected --target=typecheck --files=${files.join(',')}`;
  // },
  // '{apps,libs,packages,tools}/**/*.{js,ts,jsx,tsx,json}': [
  //   files => `nx affected:lint --files=${files.join(',')}`,
  //   files => `nx format:write --files=${files.join(',')}`,
  // ],
  '{apps,libs,packages,tools}/**/*.{ts,tsx}': [
    'nx affected --target typecheck --uncommitted',
  ],
  '{apps,libs,packages,tools}/**/*.{js,ts,jsx,tsx,json,md,html,css,scss}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted',
  ],
};
