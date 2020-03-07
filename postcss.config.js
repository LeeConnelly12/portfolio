const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/index.html',],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = env => {
  return {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      env.webpack.mode === 'production' && purgecss,
      env.webpack.mode === 'production' && 
        require('postcss-discard-comments')({
          removeAll: true
        })
    ]
  }
}