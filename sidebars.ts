import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  Sidebar: [
    'welcome',
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'install/install',
      },
      items: [
        {
          type: 'category',
          label: 'Panel',
          link: {
            type: 'generated-index',
            description: "You can choose between two installation methods:",
          },
          collapsed: false,
          items: [
            'install/panel/standalone',
            'install/panel/dockerized',
          ],
        },
        {
          type: 'category',
          label: 'Wings',
          link: {
            type: 'generated-index',
            description: "You can choose between two installation methods:",
          },
          collapsed: false,
          items: [
            'install/wings/standalone',
            'install/wings/dockerized',
          ],
        },
        {
          type: 'category',
          label: 'Misc',
          link: {
            type: 'generated-index',
          },
          items: [
            'install/misc/ssl',
            'install/misc/mysql',
            'install/misc/redis',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Updating',
      link: {
        type: 'generated-index',
      },
      items: [
        'update/panel',
        'update/wings',
      ],
    },
    'plugins',
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      items: [
        'guides/mounts',
        'guides/php-upgrade',
        'guides/database-hosts',
        'guides/change-panel-domain',
        'guides/uninstalling',
        {
          type: 'category',
          label: 'Eggs',
          link: {
            type: 'generated-index',
          },
          items: [
            'guides/eggs/creating-a-custom-egg',
            'guides/eggs/creating-a-custom-yolk',
          ],
        },
        {
          type: 'category',
          label: 'Disk Quotas',
          link: {
            type: 'doc',
            id: 'guides/disk-quotas/index',
          },
          items: [
            'guides/disk-quotas/ext4-xfs',
          ],
        },
      ],
    },
    'troubleshooting',
    'comparison',
    'glossary'
  ],
};

export default sidebars;
