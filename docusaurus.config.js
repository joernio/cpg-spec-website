const path = require('path');

module.exports = {
  title: 'Code Property Graph Specification Website',
  tagline: '',
  url: 'https://cpg-spec.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'joernio',
  projectName: 'cpg-spec-website',
  themeConfig: {
    navbar: {
      title: 'Code Property Graph Specification Website',
      items: [],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      style: 'dark',
      links: [],
      copyright:  `Copyright © ${new Date().getFullYear()} The Joern Team.`,
    },
  },
  plugins: [
    path.resolve(__dirname, 'plugins/staticcode')
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
