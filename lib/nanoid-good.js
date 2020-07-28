'use strict';

module.exports = function (option) {
  const requirePeer = require('./require-peer.js');
  /**
   *  https://github.com/ai/nanoid
   */
  const en = requirePeer('nanoid-good/locale/en');
  const nanoid = require('nanoid-good')(en);

  option = option || {};
  const size = option.size || 21;
  return () => nanoid(size);
};
