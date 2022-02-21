export default {
    mount: {
      src: '/',
    },
    optimize: {
      bundle: true,
      minify: true,
      target: 'es2020',
    },
    devOptions: {
      tailwindConfig: './tailwind.config.js',
    },
    plugins: ['@snowpack/plugin-postcss'],
  }
  