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
    // check value each element
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !==  arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};





const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4,5,6,7,8,9,10]

const map = function(array, callback){
  if(!array) return array;
  if(!callback) return array;

  const results = [];
  for (let item of array){
    results.push(callback(item))
  }
  return results;
}

//return array with first letter in each word
const results1 = map(numbers, null);
console.log(results1);

//return array, each element is even(boolean)
const results2 = map([], number => number * 5);
console.log(results2)

//return array of elements multiplied by 5
const results3 = map(numbers, number => number * 5);
console.log(results3)

//tests
assertArraysEqual(results1, numbers); 
assertArraysEqual(results2,[])
assertArraysEqual(results3,[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]) // pass
assertArraysEqual(map(numbers, number => number), numbers)