/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Pigster Churn', // Title for your website.
  tagline: 'Just another pig who plays video games',
  disableTitleTagline: true,
  // url: 'https://pigster-games.onrender.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  url: 'https://pigsterchurn.github.io', // Your website URL
  //baseUrl: '/games/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'pigsterchurn.github.io',
  organizationName: 'pigsterchurn',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {doc: 'pdmm/pdmm-preface', label: 'PDMM'},
    {href: '/rhythmgames', label: 'Rhythm'},
    {href: '/games', label: 'Games'},
    {blog: true, label: 'Reviews'},
    {href: "https://pigsterchurn.tumblr.com/", label: "Tumblr"}
    // {doc: 'doc4', label: 'API'},
    // {page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo4.png',
  footerIcon: 'img/favicon4.ico',
  favicon: 'img/favicon4.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#05A',
    secondaryColor: '#05A',
  },

  disableHeaderTitle: true,

  blogSidebarCount: 'ALL',
  blogSidebarTitle: { default: 'Recent posts', all: 'All posts' },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Pigster Churn`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  /*scripts: ['https://buttons.github.io/buttons.js', {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/awesomplete/1.1.5/awesomplete.min.js',
    async: true,
  }],*/
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lato&display=swap'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
