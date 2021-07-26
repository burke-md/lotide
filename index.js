const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const  countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const withOut = require('./withOut');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');



module.exports = {
  head,
  tail,
  middle,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  withOut,
  ////below are comparison functions
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  eqArrays,
  eqObjects
};