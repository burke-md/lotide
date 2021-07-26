const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(obj,callback) {
  //edge case
  if (!obj) return "object null"
  
  //iterate through obj items
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) {
      return key;
    }
  }
};


const results1  = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const results2 = findKey(null, x => x.stars === 2)

assertEqual(results1, "noma");// normal operation
assertEqual(results2, "object null");

module.exports = findKey;