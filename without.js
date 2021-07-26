
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }


};
assertArraysEqual;

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




const without = function(fullArray, removeArray) {
let newArray =[]
//iterate through fullArray
  for(let i = 0; i < fullArray.length; i ++){
    //iterate through removeArray
    let onRemoveList = false
    for(let j = 0; j < removeArray.length; j ++){
      if(fullArray[i] === removeArray[j]){
        onRemoveList = true
      }
    }
    if (!onRemoveList){
      newArray.push(fullArray[i])
    }
  }
  return newArray;
}  


const words = ["hello", "world", "lighthouse"];


assertArraysEqual(without(words, ["lighthouse"]),['hello', 'world']);

module.exports = without;




