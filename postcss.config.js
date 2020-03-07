const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/index.html',],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = ctx => {
  return {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      ctx.webpack.mode === 'production' && purgecss,
      ctx.webpack.mode === 'production' && 
        require('postcss-discard-comments')({
          removeAll: true
        })
    ]
  }
}