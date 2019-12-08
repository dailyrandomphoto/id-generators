'use strict';

module.exports = function (option) {
  /**
  *  https://github.com/ai/nanoid
  */
  const generate = require('nanoid/generate');
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

  option = option || {};
  const size = option.size || 24;
  return () => generate(alphabet, size);
};
