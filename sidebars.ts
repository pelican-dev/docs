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
      label: 'Panel',
      link: {
        type: 'generated-index',
        description: 'The Panel is a Laravel web application that serves as the web interface for users.',
      },
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Installation',
          link: {
            type: 'generated-index',
            slug: '/category/panel-installation',
            description: 'You can choose between two installation methods:',
          },
          items: [
            'panel/install/standalone',
            'panel/install/dockerized',
          ],
        },
        'panel/update',
        'panel/optional-config',
        {
          type: 'category',
          label: 'Advanced',
          link: {
            type: 'generated-index',
          },
          items: [
            'panel/advanced/mysql',
            'panel/advanced/redis',
          ],
        },
        'panel/plugins'
      ],
    },
    {
      type: 'category',
      label: 'Wings',
      link: {
        type: 'generated-index',
        description: 'Wings is the backend service installed on one or more node machines and acts as the interface between Docker and the Panel.',
      },
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Installation',
          link: {
            type: 'generated-index',
            slug: '/category/wings-installation',
            description: 'You can choose between two installation methods:',
          },
          items: [
            'wings/install/standalone',
            'wings/install/dockerized',
          ],
        },
        'wings/update',
        'wings/optional-config',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      items: [
        'guides/ssl',
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
