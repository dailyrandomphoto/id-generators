'use strict';

module.exports = function (option) {
  const requirePeer = require('./require-peer.js');
  /**
  *  https://github.com/ai/nanoid
  */
  const en = requirePeer('nanoid-good/locale/en');
  const generate = require('nanoid-good/generate')(en);
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

  option = option || {};
  const size = option.size || 24;
  return () => generate(alphabet, size);
};
