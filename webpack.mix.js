const mix = require('laravel-mix')
const purgecss = require('@fullhuman/postcss-purgecss')

mix.postCss('css/app.css', 'dist/css', [
  require('tailwindcss'),
  ...mix.inProduction() ? [
    purgecss({
      content: ['index.html'],
      css: ['css/app.css'],
      defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || [],
    }),
  ] : [],
])
  .version()
  .sourceMaps()
  .setPublicPath('dist')

if (mix.inProduction()) {
  mix.copy('index.html', 'dist/index.html')
}