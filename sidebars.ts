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
        'panel/getting-started'
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
    {
      type: 'category',
      label: 'Post-installation',
      items: [
        'post_install/troubleshooting',
      ],
    },
    'comparison',
    'team'
  ],
};

export default sidebars;
