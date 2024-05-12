import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

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
        {
          type: 'category',
          label: 'Dependency',
          items: [
              'panel/dependency/debian',
              'panel/dependency/ubuntu'
          ]
        },
        'panel/webserver-config',
        'panel/config',
        'panel/update',
        {
          type: 'category',
          label: 'Advanced',
          items: [
              'panel/advanced/redis',
              'panel/advanced/mysql'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Wings',
      items: ['wings/install','wings/optional-config', 'wings/update'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/mounts', 'guides/ssl'],
    },
    'troubleshooting',
    'glossary'
  ],
};

export default sidebars;
