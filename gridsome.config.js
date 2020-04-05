// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Margalaguia guide conférencière",
  siteDescription:
    "Le site de margalaguia guide conférencière en région Occitanie et Provenece",
  siteUrl: "https://margalaguia.com/",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Margalaguia guide conférencière",
          feed_url: "https://margalaguia.com//rss.xml",
          site_url: "https://margalaguia.com//",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.summary,
          url: "https://margalaguia.com/" + node.path,
          author: "Timothy Alcaide",
          date: node.date,
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-134054817-2",
      },
    },
  ],
  templates: {
    Tag: "/tag/:id",
  },
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true },
        ],
      ],
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
