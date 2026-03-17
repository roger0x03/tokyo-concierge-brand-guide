/**
 * @typedef {Object} QuickLink
 * @property {string} href - Internal URL.
 * @property {string} label - Human-readable label.
 */

/**
 * @typedef {Object} QuickLinkGroup
 * @property {string} heading - Section heading shown above the links.
 * @property {QuickLink[]} links - List of links belonging to this group.
 */

/**
 * @typedef {Object} WebsiteTheme
 * @property {string} id - Unique ID for the theme.
 * @property {string} label - Label for the toolbar radio/button.
 * @property {string} css - Path to the specific theme stylesheet.
 */

/**
 * @typedef {Object} Config
 * @property {string} client - Name of the client.
 * @property {string} website - URL for the main website app.
 * @property {string[]} styles - Stylesheets to load for the patterns that sit outside of those bundled with each component e.g global.css, theme.css etc.
 * @property {WebsiteTheme[]} websiteThemes - Switchable page-level themes for the pattern previews.
 * @property {string} componentImportPath - The path prefix for imports (e.g. '@repo/ui/').
 * @property {Boolean} showToolbar - Decide whether to show or hide the theme toggle toolbar.
 * @property {QuickLinkGroup[]} quickLinks - Quick links to be shown in the sidebar.
 */

/**
 * @typedef {Object} NaviConfig
 * @property {string} title - The title of the website.
 * @property {Config} config - Config information required for the pattern library.
 */

/** @type {NaviConfig} */
export const navi = {
  title: 'Pattern Library',
  config: {
    client: 'Tokyo Concierge: Brand Guidelines',
    website: 'https://set.studio/',
    styles: ['/css/global.css', '/css/theme.css'],
    websiteThemes: [
      {
        id: 'one',
        label: 'One',
        css: '/css/pages/one.css',
      },
      {
        id: 'two',
        label: 'Two',
        css: '/css/pages/two.css',
      },
    ],
    componentImportPath: '@repo/ui/',
    showToolbar: true,
    quickLinks: [
      {
        heading: 'Design tokens',
        links: [
          { href: '/colors/', label: 'Colour' },
          { href: '/typography/', label: 'Typography' },
          { href: '/spacing/', label: 'Spacing' },
        ],
      },
      {
        heading: 'CSS',
        links: [
          { href: '/css-compositions/', label: 'Layout Compositions' },
          { href: '/css-utilities/', label: 'Core Utilities' },
        ],
      },
    ],
  },
};
