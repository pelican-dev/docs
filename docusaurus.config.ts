import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pelican',
  tagline: 'From prehistoric to peak performance: Pelican takes flight!',
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
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ]
  ],
  themeConfig: {
    //announcementBar: {
    //  isCloseable: false,
    //  id: 'release',
    //  content: 'Stay Tuned!',
    //  backgroundColor: '#38bdf8',
    //},
    matomo: { 
      matomoUrl: 'https://track.areyouscared.dev/',
      siteId: '2', //TODO: Change for Launch
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js'
    },
    navbar: {
      title: 'Pelican.dev',
      logo: {
        src: 'img/logo.png',
      },
      items: [
        //{
        //  to: '/docs/panel/getting-started',
        //  label: 'Install',
        //  position: 'left'
        //},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/donate', label: 'Donate', position: 'left'},
        {
          href: 'https://github.com/pelican-dev/',
          position: 'right',
          className: 'github-link',
        },
        {
          href: 'https://discord.gg/pelican-panel',
          position: 'right',
          className: 'discord-link',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    footer: {
      logo: {
        src: 'img/logo.png',
        height: '64px',
        width: '64px',
      },
      style: 'dark',
      links: [
        /* TODO REMOVE THIS LINE ON LAUNCH
        {
          title: 'Documentation',
          items: [
            {
              label: 'Panel',
              to: '/docs/panel/getting-started',
            },
            {
              label: 'Wings',
              to: '/docs/wings/install',
            },
            {
              label: 'SSL Setup',
              to: '/docs/guides/ssl'
            },
          ],
        }, // */
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
              href: 'https://github.com/pelican-dev',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pelican`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'nginx', 'apacheconf', 'ini', 'sql', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
      // TODO FOR LAUNCH: require.resolve('docusaurus-lunr-search'),
      'docusaurus-plugin-sass',
      'docusaurus-plugin-matomo'
  ],
};

export default config;
