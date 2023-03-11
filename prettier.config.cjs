/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
