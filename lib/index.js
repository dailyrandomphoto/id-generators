'use strict';

const { register, get } = require('./id-generators.js');
const cuid = require('./cuid.js');

register('default', cuid);
register('cuid', cuid);
register('cuid-slug', require('./cuid-slug.js'));
register('nanoid', require('./nanoid.js'));
register('nanoid-good', require('./nanoid-good.js'));
register('nanoid-simple', require('./nanoid-simple.js'));
register('nanoid-simple-good', require('./nanoid-simple-good.js'));
register('nanoid-lowercase', require('./nanoid-lowercase.js'));
register('nanoid-lowercase-good', require('./nanoid-lowercase-good.js'));

module.exports = {
  register,
  get
};
