import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pelican.Dev',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true
  },
  url: 'https://pelican.dev',
  baseUrl: '/',
  organizationName: 'pelican-dev',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/pelican-dev/docs/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      isCloseable: false,
      id: 'release',
      content: 'Comming Soon!'
    },
    navbar: {
      title: 'Pelican.dev',
      logo: {
        src: 'img/logo.png',
      },
      items: [
        
        {
          sidebarId: 'Sidebar',
          type: 'docSidebar',
          position: 'left',
          label: 'Install',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pelican-dev/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Panel',
              to: '/docs/panel/getting-started',
            },
            {
              label: 'Wings',
              to: '/docs/wings/installing-wings',
            },
            {
              label: 'Other Guides',
              to: '/docs/guides/'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/pelican-panel',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/pelican-dev',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pelican.dev Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
