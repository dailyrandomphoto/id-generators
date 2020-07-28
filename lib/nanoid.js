'use strict';

module.exports = function (option) {
  /**
  *  https://github.com/ai/nanoid
  */
  const {nanoid} = require('nanoid');

  option = option || {};
  const size = option.size || 21;
  return () => nanoid(size);
};
