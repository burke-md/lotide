const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }


};


const eqArrays = function(arr1, arr2) {
  //check arr legnth
  let flag = false;
  if (arr1.length === arr2.length) {
    //check typeof each element
    for (let i = 0; i < arr1.length; i ++) {


      if (typeof arr1[i] === typeof arr2[i]) {
        //check value each element
        for (let i = 0; i < arr1.length; i ++) {

          if (arr1[i] ===  arr2[i]) {

            flag = true;
          } else {
         
            return false;
          }
        }
      }
    }
  }
  return flag;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays([1, 2, 3], [4, 5, 3]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false




