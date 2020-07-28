'use strict';

module.exports = function (option) {
  /**
   *  https://github.com/ai/nanoid
   */
  const { customAlphabet } = require('nanoid');
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

  option = option || {};
  const size = option.size || 24;
  const nanoid = customAlphabet(alphabet, size);
  return nanoid;
};
