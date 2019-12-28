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
    },
    {
      use: '@gridsome/source-faker',
      options: {
        numNode: 50
      }
    }
    ,
    {
      use: 'strava-v3',
      options: {
        numNode: 50
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
};