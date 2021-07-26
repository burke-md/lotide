const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {
  it("returns an empty arrray for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  // assertArraysEqual(middle([1, 2, 3]),[2]);

  it("returns [2]] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

// const assertArraysEqual = require('../assertArraysEqual');
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);

