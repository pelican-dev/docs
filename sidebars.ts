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
      collapsed: false,
      items: [
        'panel/getting-started',
        'panel/webserver-config',
        'panel/panel-setup',
        'panel/optional-config',
        'panel/update',
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'panel/advanced/redis',
            'panel/advanced/mysql',
            'panel/advanced/artisan',
            'panel/advanced/docker',
            'panel/advanced/plugins',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Wings',
      items: [
        'wings/install',
        'wings/optional-config',
        'wings/update'
      ],
    },
   {
      type: 'category',
      label: 'Eggs',
      items: [
        'eggs/creating-a-custom-egg',
        'eggs/creating-a-custom-yolk',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/docker',
        'guides/mounts',
        'guides/ssl',
        'guides/php-upgrade',
        'guides/database-hosts',
        'guides/change-panel-domain',
        'guides/uninstalling',
      ],
    },
    'troubleshooting',
    'comparison',
    'glossary'
  ],
};

export default sidebars;
