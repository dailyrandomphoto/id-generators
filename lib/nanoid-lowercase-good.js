'use strict';

/**
 *  https://github.com/ai/nanoid
 */
const en = require('nanoid-good/locale/en');
const generate = require('nanoid-good/generate')(en);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

module.exports = function (option) {
  option = option || {};
  const size = option.size || 26;
  return () => generate(alphabet, size);
};
