'use strict';

module.exports = function (option) {
  /**
   *  https://github.com/ai/nanoid
   */
  const { customAlphabet } = require('nanoid');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  option = option || {};
  const size = option.size || 26;
  const nanoid = customAlphabet(alphabet, size);
  return nanoid;
};
