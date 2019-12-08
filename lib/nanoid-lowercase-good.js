'use strict';

module.exports = function (option) {
  const requirePeer = require('./require-peer.js');
  /**
  *  https://github.com/ai/nanoid
  */
  const en = requirePeer('nanoid-good/locale/en');
  const generate = require('nanoid-good/generate')(en);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  option = option || {};
  const size = option.size || 26;
  return () => generate(alphabet, size);
};
