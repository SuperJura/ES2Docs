// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Escape Simulator 2',
  tagline: 'With Room Editor 2.0',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https:/docs2.escapesimulator.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ES2Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  organizationName: 'SuperJura', // Usually your GitHub org/user name.
  projectName: 'ES2Docs', // Usually your repo name.
  trailingSlash: false, onBrokenLinks: 'throw',

  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Escape Simulator 2',
      logo: {
        alt: 'Escape Simulator 2',
        src: 'img/es2.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gameSidebar',
          position: 'left',
          label: 'About the game',
        },
        {
          type: 'docSidebar',
          sidebarId: 'roomEditorSidebar',
          position: 'left',
          label: 'Room Editor',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/pinestudio',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/PineStudioLLC',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/PlayEscapeSimulator',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SuperJura/ES2Docs',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Escape Simulator 2, Pine Studio.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',   // start in dark mode
      disableSwitch: false,  // keep the toggle in navbar
      respectPrefersColorScheme: false, // ignore system preference
    },
  },
};

export default config;

