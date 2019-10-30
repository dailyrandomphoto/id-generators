'use strict';

/**
 *  https://github.com/ai/nanoid
 */
const nanoid = require('nanoid');

module.exports = function (option) {
  option = option || {};
  const size = option.size || 21;
  return () => nanoid(size);
};
