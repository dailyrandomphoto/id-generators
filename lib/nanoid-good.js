'use strict';

/**
 *  https://github.com/ai/nanoid
 */
const en = require('nanoid-good/locale/en');
const nanoid = require('nanoid-good')(en);

module.exports = function (option) {
  option = option || {};
  const size = option.size || 21;
  return () => nanoid(size);
};
