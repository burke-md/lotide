const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // refactor as for of loop
  for (let i = 0; i < Object.keys(object1).length; i++) {

    if (Array.isArray(object1[Object.keys(object1)[i]])) {

      if (eqArrays(object1[Object.keys(object1)[i]], object2[Object.keys(object1)[i]])) {
      } else {
        return false;
      }
    } else {
              if (object1[Object.keys(object1)[i]] !== object2[Object.keys(object1)[i]]) {
        return false;
      }
    }
  }    
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({a:1}, {a:1});// true)

module.exports = assertObjectsEqual;


