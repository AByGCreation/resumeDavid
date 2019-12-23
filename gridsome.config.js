module.exports = {
  siteName: 'CV de David RAMBEAU',
  siteDescription: 'Retrouver mon CV detaillé de facon plus evocatrice.',
  siteUrl: 'https://www.',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }

  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}