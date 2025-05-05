// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nodefusion MSP User Manual',
  tagline: 'NodefusionMSP.UserManual',
  favicon: 'img/favicon.ico',

  plugins: [
    [
      'pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'saveData',
          'queryString',
          'standalone'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/nodefusion-account.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#d37352',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#d37352',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/nodefusion-account.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/nodefusion-account.png',
            color: '#d37352',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/nodefusion-account.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#d37352',
          },
        ],
      },
    ],
  ],

  // Set the production url of your site here
  url: 'https://msp-manual.nodefusion.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nodefusion', // Usually your GitHub org/user name.
  projectName: 'NodefusionMSP.UserManual', // Usually your repo name.

  trailingSlash: true,

  onBrokenLinks: 'throw',
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
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nodefusion/NodefusionMSP.Manual/tree/main/',
        },
        gtag: {
          trackingID: 'G-J3J5LDGC9Z',
        },
        googleTagManager: {
          containerId: 'GTM-MS2L8JWB',
        },
        sitemap: {
          changefreq: 'weekly',
          lastmod: 'datetime',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/NFN - portal logo reactive.svg',
      navbar: {
        title: 'Nodefusion MSP User Manual',
        logo: {
          alt: 'MSP',
          src: 'img/NFN - portal logo light.svg',
          srcDark: 'img/NFN - portal logo dark.svg',          
        },
        items: [
          {
            href: 'https://github.com/Nodefusion/NodefusionMSP.Manual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'XB6UFR99SC',
        apiKey: '70ef91ad82fe7b97fe24c5c703564c2a',
        indexName: 'msp-manual-nodefusion',
        insights: true,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Nodefusion',
                href: 'https://www.nodefusion.com/en-us/',
              },
              {
                label: 'X',
                href: 'https://x.com/Nodefusion',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/nodefusion',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nodefusion',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nodefusion`,

      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
