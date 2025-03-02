import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import applicationSidebar from "./docs/references/application/sidebar";
import clientSidebar from "./docs/references/client/sidebar";

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
    "welcome",
    {
      type: "category",
      label: "Panel",
      collapsed: false,
      items: [
        "panel/getting-started",
        "panel/webserver-config",
        "panel/panel-setup",
        "panel/optional-config",
        "panel/update",
        {
          type: "category",
          label: "Advanced",
          items: [
            "panel/advanced/redis",
            "panel/advanced/mysql",
            "panel/advanced/artisan",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Wings",
      items: ["wings/install", "wings/optional-config", "wings/update"],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/mounts",
        "guides/ssl",
        "guides/php-upgrade",
        "guides/database-hosts",
        "guides/uninstalling",
      ],
    },
    "troubleshooting",
    "comparison",
    "glossary",
  ],

  API: [
    {
      type: "category",
      label: "Client API",
      link: {
        type: "generated-index",
        title: "Client API",
        description:
          "This is the Client API reference for Pelican. You can use this API to integrate Pelican into your applications, automate server management, and extend functionality with custom plugins. For more details, visit our documentation or join our discord. Authentication is required for most endpoints, and you can use your API key to test authorization features.",
        slug: "references/client-api",
      },
      items: clientSidebar,
    },
    {
      type: "category",
      label: "Application API",
      link: {
        type: "generated-index",
        title: "Application API",
        description:
          "This is the Application API reference for Pelican. You can use this API to integrate Pelican into your applications, automate server management, and extend functionality with custom plugins. For more details, visit our documentation or join our discord. Authentication is required for most endpoints, and you can use your API key to test authorization features.",
        slug: "references/application-api",
      },
      items: applicationSidebar,
    },
  ],
};

export default sidebars;
