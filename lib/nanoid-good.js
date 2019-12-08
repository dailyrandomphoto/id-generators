'use strict';

module.exports = function (option) {
  /**
  *  https://github.com/ai/nanoid
  */
  const en = require('nanoid-good/locale/en');
  const nanoid = require('nanoid-good')(en);

  option = option || {};
  const size = option.size || 21;
  return () => nanoid(size);
};
