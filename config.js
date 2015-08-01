"use strict";

var merge = require("lodash.merge");

function getConfig(options) {
  options = options || {};
  var newConfig = merge(merge({}, config), options);

  if (options.environment) {
    newConfig = merge(newConfig, (config.environments && config.environments[options.environment]) || {});
  }

  config.isDev = !config.isProd;

  return newConfig;
}


var config = {
  site: {
    themeColor: "#3f3f3f",
    title: "reSTYLE",
    tagline: "UI Patterns. For Sass.",
    description: "TODO",
    styles: ["default.css"],
    copyright: {
      holder: "LinkedIn Corporation",
      year: new Date().getFullYear(),
      website: "http://engineering.linkedin.com"
    },
    feed: ["examples"],
    url: "",
    git: {
      account: "eoneill",
      repo: "eyeglass-restyle"
    },
    package: {
      name: "eyeglass-restyle"
    },
    badges: "//img.shields.io",
    nav: {
      documentation: {
        href: "documentation",
        title: "Docs",
        description: "Read the docs!"
      },
      api: {
        href: "api",
        title: "API",
        description: "API documentation",
        target: "_blank"
      },
      github: {
        href: "https://github.com/{git.account}/{git.repo}",
        title: "GitHub",
        description: "View the source on GitHub",
        target: "_blank"
      },
      examples: {
        href: "examples",
        title: "Examples"
      },
      tutorials: {
        href: "tutorials",
        title: "Tutorials"
      }
    }
  },
  livereload: {
    host: "localhost:35729"
  },
  isProd: false,
  today: Date.now(),
  dest: "./tmp/dist",

  environments: {
    production: {
      site: {
        url: "//www.restylecss.com",
        nav: {
          examples: null,
          tutorials: null
        }
      },
      isProd: true,
      livereload: false
    },
    staging: {
      site: {
        url: "",
        nav: {
          examples: null,
          tutorials: null
        }
      },
      isProd: true,
      livereload: false
    }
  }
};

module.exports = getConfig;