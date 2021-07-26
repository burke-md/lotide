const letterPositions = function(sentence) {
  const results = {};
  // hello
  for ( let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]){ //if letter is alread in obj

      results[sentence[i]].push(i)// edit obj
    } else {
      results[sentence[i]] = [i]// if letter is not in obj yet
    }
  }
  console.log(results)
  return results;

}

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
////this is counting occurances. convert to push array of indisies
const eqArrays = function(arr1, arr2) {
  //check arr legnth
  if (arr1.length === arr2.length) {
   // check value each element
    for (let i = 0; i < arr1.length; i ++) {
     if (arr1[i] !==  arr2[i]) {
       return false;
      }
    }
  }
  return true;
};

assertArraysEqual(letterPositions("halloween").e, [1])
assertArraysEqual(letterPositions("hello").l, [2, 3])
