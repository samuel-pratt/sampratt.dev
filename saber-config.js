// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
  siteConfig: {
    // Change this to the production URL of your website
    description: 'Software Developer',
    workUrl: 'https://www.ensemble.com',
    workName:  'Ensemble',
    url: 'https://sampratt.dev'
  },

  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: './theme',

  // Configure the theme
  themeConfig: {
    style: 'dark',
    github: 'samuel-pratt',
    projects: 'pinned-repos',
    linkedin: 'sam-pratt-7045401b6',
    twitter: '',
    instagram: '',
    youtube: '',
    twitch: '',
    sponsorLink: '',
    sponsorTip: '',
    contactForm: {
      type: 'netlify',
      formSubmitRedirect: '/success'
    },
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Contact',
        link: '/contact'
      }
    ],
    skills: [
      {
        topic: 'python',
        description: `I love using Python to build backends for my apps`
      },
      {
        topic: 'nodejs',
        description: `I use NodeJS to build backends that integrate with multiple services`
      },
      {
        topic: 'react',
        description: `I use React / React Native for apps and websites I build at work and on my own`
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
