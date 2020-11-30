// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
  siteConfig: {
    // Change this to the production URL of your website
    description: 'Software Developer',
    url: 'https://sampratt.dev'
  },

  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: 'portfolio',

  // Configure the theme
  themeConfig: {
    style: 'dark',
    github: 'samuel-pratt',
    projects: 'pinned-repos',
    twitter: '',
    sponsorLink: '',
    sponsorTip: '',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
    skills: [
      {
        topic: 'python',
        description: `I love using Python for building APIs and web scrapers`
      },
      {
        topic: 'nodejs',
        description: `I use NodeJS to build backends that integrate with multiple services`
      },
      {
        topic: 'react',
        description: `I use React / React Native for pretty much all my frontends`
      }
    ]
  },

  permalinks: {
    page: '/:slug',
    post: '/posts/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true
      }
    }
  ]
}
