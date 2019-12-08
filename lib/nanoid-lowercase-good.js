'use strict';

module.exports = function (option) {
  /**
  *  https://github.com/ai/nanoid
  */
  const en = require('nanoid-good/locale/en');
  const generate = require('nanoid-good/generate')(en);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  option = option || {};
  const size = option.size || 26;
  return () => generate(alphabet, size);
};
