"use strict";

module.exports = function(Handlebars, config) {
  Handlebars.registerHelper("array", function() {
    // return the passed in arguments as an array
    return [].slice.call(arguments, 0, -1);
  });
};
