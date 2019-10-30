'use strict';

const {slug} = require('cuid');

module.exports = function () {
  return () => slug();
};
