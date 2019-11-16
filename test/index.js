'use strict';

const {expect} = require('chai');
const generators = require('id-generators');

describe('id-generators', () => {
  it('should throw an error when register with an invalid argument', () => {
    expect(() => generators.register('invalid', 'not a function')).to.throw(TypeError);
  });

  it('should throw an error when register with an already registered key', () => {
    expect(() => generators.register('cuid', () => {})).to.throw(TypeError);
  });

  it('should use the custom function', () => {
    generators.register('my_custom_func', () => {
      return () => new Date().getTime();
    });

    const generator = generators.get('my_custom_func');
    generator.should.be.a('function');
    const gen = generator({});
    gen.should.be.a('function');
    const id = gen();
    console.log('      ID: ' + id);
    id.should.be.a('number');
  });

  it('should use option in the custom function', () => {
    generators.register('my_custom_path', option => {
      option = option || {};
      const size = option.size || 8;
      const prefix = option.prefix || 'items-';
      return function (title) {
        return prefix + title.toLowerCase().replace(/[^\w]/g, '').slice(0, size);
      };
    });

    const generator = generators.get('my_custom_path');
    generator.should.be.a('function');
    const gen = generator({size: 6});
    gen.should.be.a('function');
    const id = gen('Hello World!');
    console.log('      ID: ' + id);
    id.should.eql('items-hellow');
  });

  it('should throw an error when get a unregistered generator', () => {
    expect(() => generators.get('unregistered')).to.throw(TypeError);
  });

  it('should return a default function', () => {
    const generator = generators.get();
    generator.should.be.a('function');
    const gen = generator({});
    gen.should.be.a('function');
    const id = gen();
    console.log('      ID: ' + id);
    id.should.be.a('string');
  });

  describe('cuid', () => {
    it('should return a string with length is 25', () => {
      const generator = generators.get('cuid');
      generator.should.be.a('function');
      const gen = generator({});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(25);
      id.slice(0, 1).should.eql('c');
    });
  });

  describe('cuid-slug', () => {
    it('should return a string with length is 7 to 10', () => {
      const generator = generators.get('cuid-slug');
      generator.should.be.a('function');
      const gen = generator({});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf.within(7, 10);
    });
  });

  describe('nanoid', () => {
    it('should return a string with length is 21', () => {
      const generator = generators.get('nanoid');
      generator.should.be.a('function');
      let gen = generator({});
      gen.should.be.a('function');
      let id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(21);

      gen = generator();
      gen.should.be.a('function');
      id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(21);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  describe('nanoid-good', () => {
    it('should return a string with length is 21', () => {
      const generator = generators.get('nanoid-good');
      generator.should.be.a('function');
      let gen = generator({});
      gen.should.be.a('function');
      let id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(21);

      gen = generator();
      gen.should.be.a('function');
      id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(21);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid-good');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  describe('nanoid-simple', () => {
    it('should return a string with length is 24', () => {
      const generator = generators.get('nanoid-simple');
      generator.should.be.a('function');
      let gen = generator({});
      gen.should.be.a('function');
      let id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(24);

      gen = generator();
      gen.should.be.a('function');
      id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(24);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid-simple');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  describe('nanoid-simple-good', () => {
    it('should return a string with length is 24', () => {
      const generator = generators.get('nanoid-simple-good');
      generator.should.be.a('function');
      let gen = generator({});
      gen.should.be.a('function');
      let id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(24);

      gen = generator();
      gen.should.be.a('function');
      id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(24);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid-simple-good');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  describe('nanoid-lowercase', () => {
    it('should return a string with length is 26', () => {
      const generator = generators.get('nanoid-lowercase');
      generator.should.be.a('function');
      let gen = generator({});
      gen.should.be.a('function');
      let id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(26);

      gen = generator();
      gen.should.be.a('function');
      id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(26);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid-lowercase');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });

  describe('nanoid-lowercase-good', () => {
    it('should return a string with length is 26', () => {
      const generator = generators.get('nanoid-lowercase-good');
      generator.should.be.a('function');
      let gen = generator({});
      gen.should.be.a('function');
      let id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(26);

      gen = generator();
      gen.should.be.a('function');
      id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(26);
    });

    it('should return a string with a custom length', () => {
      const generator = generators.get('nanoid-lowercase-good');
      generator.should.be.a('function');
      const gen = generator({size: 18});
      gen.should.be.a('function');
      const id = gen();
      console.log('      ID: ' + id);
      id.should.be.a('string').have.lengthOf(18);
    });
  });
});
