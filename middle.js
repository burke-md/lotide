
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqArrays = function(arr1, arr2) {
  //check arr legnth

  if (arr1.length === arr2.length) {


    //check value each element
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !==  arr2[i]) {


        return false;
      }
    }
  }
  return true;
};


const middle = function(arr) {
  let mid = [];
  //edge case: one or two elements return empty array
  if (arr.length <= 2) {
    return mid;
  } else {
    // length even -- requires return of 2 elements

    if (arr.length % 2 === 0) {
      mid.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);

      // length odd -- return single element
    } else {
      mid.push(arr[Math.floor(arr.length / 2)]);
    }
  }  
  return mid;
};

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);

