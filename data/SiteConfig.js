const config = {
  siteTitle: 'Chris Gonzalez',
  siteTitleShort: 'Chris Gonzalez',
  siteTitleAlt: 'Chris Gonzalez',
  siteLogo: '',
  siteUrl: 'https://www.chrismgonzalez.com',
  repo: 'https://github.com/chrismgonzalez/chrismgonzalezv3',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Chris Gonzalez is a free lance developer learning the full-stack. He specializes in modern JavaScript. He enjoys writing about what he learns so that others have a simple path to knowledge',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  userName: 'Chris',
  userEmail: 'cmgonza89@gmail.com',
  userTwitter: 'ChrisMGDev',
  userLocation: 'Fort Worth, TX',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I build open source projects and write the missing instruction manuals of the web.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    /* {
      name: 'Learn',
      link: '/blog',
    }, */
    {
      name: 'Contact',
      link: '/contact/',
    }
  ],
  copywrite: 'Copyright 2019, chrismgonzalez.com',
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
