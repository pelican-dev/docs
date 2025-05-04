import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./src/plugins/tailwind-config.cjs";
import remarkgfm from "remark-gfm";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Pelican",
  tagline: "From prehistoric to peak performance: Pelican takes flight!",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
  url: "https://pelican.dev",
  baseUrl: "/",
  organizationName: "pelican-dev",
  projectName: "docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  themes: ["docusaurus-theme-openapi-docs"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
          editUrl: "https://github.com/pelican-dev/docs/blob/main/",
          remarkPlugins: [remarkgfm],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/tailwind.css"),
            require.resolve("./src/css/custom.scss"),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Pelican",
      logo: {
        src: "img/logo.png",
      },
      items: [
        { to: "/docs", label: "Docs", position: "left" },
        { to: "/docs/references/client-api", label: "API", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/support", label: "Support", position: "left" },
        { to: "/faq", label: "FAQ", position: "left" },
        { to: "/hub", label: "Hub", position: "left", target: "_blank", },
        { to: "/eggs", label: "Eggs", position: "left", target: "_blank", },
        { to: "/github", position: "right", className: "github-link", target: "_blank", },
        { to: "/discord", position: "right", className: "discord-link", target: "_blank", },
      ],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    footer: {
      logo: {
        src: "img/logo.png",
        height: "64px",
        width: "64px",
      },
      style: "dark",
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
              to: '/docs/wings/install',
            },
            {
              label: 'SSL Setup',
              to: '/docs/guides/ssl'
            },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Discord", to: "/discord", target: "_blank", },
            { label: "Blog", to: "/blog", target: "_blank", },
            { label: "GitHub", to: "/github", target: "_blank", },
          ],
        },
      ],
      copyright: `Copyright © 2024 - ${new Date().getFullYear()} Pelican`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "nginx",
        "apacheconf",
        "ini",
        "sql",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          { from: '/docs/references', to: '/docs/references/client-api' },
          { from: '/discord', to: 'https://discord.gg/pelican-panel' },
          { from: '/eggs', to: 'https://pelican-eggs.github.io/pelican' },
          { from: '/github', to: 'https://github.com/pelican-dev/panel' },
          { from: '/hub', to: 'https://hub.pelican.dev' },
          { from: '/donate', to: 'https://pelican.dev/support' },
        ],
      },
    ],
    require.resolve('docusaurus-lunr-search'),
    "docusaurus-plugin-sass",
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_jFc0yrQBPn7T3u4LMXZbOVytUD3tGMxhbOdrooeuR9g",
        appUrl: "https://app.posthog.com",
        enableInDevelopment: "false",
      },
    ],
    tailwindPlugin,
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          client: {
            specPath: "static/client.json",
            outputDir: "docs/references/client",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          application: {
            specPath: "static/application.json",
            outputDir: "docs/references/application",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
};

export default config;
