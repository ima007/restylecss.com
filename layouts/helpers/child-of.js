"use strict";

module.exports = function(Handlebars, config) {
  Handlebars.registerHelper("child-of", function(path, parentPath) {
    return path.indexOf(parentPath) === 0;
  });
};
