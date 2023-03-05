/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./**/*.{html,svelte}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
