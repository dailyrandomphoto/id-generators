'use strict';

const store = {};

function register(type, fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn must be a function');
  }

  if (typeof store[type] === 'function') {
    throw new TypeError('already registered as type: ' + type);
  }

  store[type] = fn;
}

function get(type) {
  type = type || 'default';
  return (
    store[type] ||
    throwIt(new TypeError("Can't find generator with type: " + type))
  );
}

function throwIt(err) {
  throw err;
}

module.exports = {
  register,
  get
};
