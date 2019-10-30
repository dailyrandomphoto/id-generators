# id-generators

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![devDependencies Status][devDependencies-image]][devDependencies-url]

**id-generators** is small JavaScript library to generate ID with awesome Unique ID libraries.

## Installation

```sh
npm install id-generators
```

## Usages

```js
const generators = require('id-generators');
const generator = generators.get('nanoid');
const generate = generator();

console.log('ID: ' + generate());
// ID: gCa0wL_8ElTje5cwOci1d
console.log('ID: ' + generate());
// ID: 5C_YAjgQl4iM3zK-TValY
console.log('ID: ' + generate());
// ID: gQOOwCoQyfCuGK7fgINLd
```

If you want to customize ID, you can pass an option as an argument to the `generator` function.
```js
const generators = require('id-generators');
const generator = generators.get('nanoid-simple');
const generate = generator({size: 25});

console.log('ID: ' + generate());
// ID: oa9wj0kfm50gv2qse8l5xup0u
console.log('ID: ' + generate());
// ID: xn5ff5odiylg4jehhhp9vtlxv
console.log('ID: ' + generate());
// ID: dff7ay5x38k1pkc2pxjv7elky
```

generator type | ID length | character set |options/default | description
--- | --- | --- | --- | ---
cuid (default) | 25 | `a-z0-9`, start with `c` | | use [cuid()](https://github.com/ericelliott/cuid) generated string. <br>e.g. `ck2bi7fxf00013ryng5jr1rer`
cuid-slug | 7-10 | `a-z0-9` | | use [cuid.slug()](https://github.com/ericelliott/cuid) generated string. <br>e.g. `xh23npi`
nanoid | 21 | `A-Za-z0-9_-` | size/21 | use [nanoid()](https://github.com/ai/nanoid) generated string. <br>e.g. `EwUTt2eoka-oEV5kf-o0O`
nanoid-simple | 24 | `a-z0-9` | size/24 | use [nanoid/generate](https://github.com/ai/nanoid) generated string. <br>e.g. `pfldm3gg8h9psydphotqe71d`
nanoid-lowercase | 26 | `a-z` | size/26 | use [nanoid/generate](https://github.com/ai/nanoid) generated string. <br>e.g. `jsjxoibprplrdoitjmppotjrnm`


## Define Custom Generators
This sample shows how to register a generator function.
The generator function should return a function that returns a ID.

```js
const { register } = require('id-generators');

register('my_custom_id', function(option) {
  option = option || {};
  let size = option.size || 8;
  let prefix = option.prefix || 'items-';
  return function(title) {
    return prefix + title.toLowerCase().replace(/[^\w]/g, '').substring(0, size);
  };
});
```
```js
const generators = require('id-generators');
const generator = generators.get('my_custom_id');
const generate = generator({size: 6});

console.log('ID: ' + generate('Hello World!'));
// ID: items-hellow
console.log('ID: ' + generate('Foo Bar!'));
// ID: items-foobar
```

## Related
- [Awesome Unique ID](https://github.com/grantcarthew/awesome-unique-id) - A curated list of awesome Unique ID libraries and resources.
- [cuid](https://github.com/ericelliott/cuid) - Collision-resistant ids optimized for horizontal scaling and binary search lookup performance.
- [nanoid](https://github.com/ai/nanoid) - A tiny, secure, URL-friendly, unique string ID generator for JavaScript.


## License
Copyright (c) 2019 dailyrandomphoto. Licensed under the [MIT license][license-url].

[npm-url]: https://www.npmjs.com/package/id-generators
[travis-url]: https://travis-ci.org/dailyrandomphoto/id-generators
[coveralls-url]: https://coveralls.io/github/dailyrandomphoto/id-generators?branch=master
[license-url]: LICENSE
[dependencies-url]: https://david-dm.org/dailyrandomphoto/id-generators
[devDependencies-url]: https://david-dm.org/dailyrandomphoto/id-generators?type=dev

[npm-downloads-image]: https://img.shields.io/npm/dm/id-generators.svg
[npm-version-image]: https://img.shields.io/npm/v/id-generators.svg
[license-image]: https://img.shields.io/npm/l/id-generators.svg
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/id-generators/master
[coveralls-image]: https://coveralls.io/repos/github/dailyrandomphoto/id-generators/badge.svg?branch=master
[dependencies-image]: https://david-dm.org/dailyrandomphoto/id-generators/status.svg
[devDependencies-image]: https://david-dm.org/dailyrandomphoto/id-generators/dev-status.svg
