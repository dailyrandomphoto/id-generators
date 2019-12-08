'use strict';

module.exports = function (option) {
  /**
  *  https://github.com/ai/nanoid
  */
  const generate = require('nanoid/generate');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  option = option || {};
  const size = option.size || 26;
  return () => generate(alphabet, size);
};
