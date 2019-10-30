'use strict';

const {register, get} = require('./id-generators');
const cuid = require('./cuid');

register('default', cuid);
register('cuid', cuid);
register('cuid-slug', require('./cuid-slug'));
register('nanoid', require('./nanoid'));
register('nanoid-simple', require('./nanoid-simple'));
register('nanoid-lowercase', require('./nanoid-lowercase'));

module.exports = {
  register,
  get
};
