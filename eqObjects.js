const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // refactor as for of loop
  for (let i = 0; i < Object.keys(object1).length; i++) {
    // console.log("obj1",object1[Object.keys(object1)[i]]);
    // console.log("obj2", object2[Object.keys(object1)[i]]);

    //check for array
    if (Array.isArray(object1[Object.keys(object1)[i]])) {
      // console.log("this is an array");
      //check it eqArray false
      if (eqArrays(object1[Object.keys(object1)[i]], object2[Object.keys(object1)[i]])) {
        // console.log("array check passed");

        //return false

      } else {
        // console.log("array check failed");
        return false;
      }

    } else {
      // console.log("not an array");
        
      if (object1[Object.keys(object1)[i]] !== object2[Object.keys(object1)[i]]) {
        return false;
      }
    }
  }
    
  return true;
};


const eqArrays = function(arr1, arr2) {
  //check arr legnth
  if (arr1.length === arr2.length) {
    // console.log("arr1 length", arr1.length);
    // console.log("arr2 length", arr2.length);
    // check value each element
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !==  arr2[i]) {
        // console.log("arr1 element",arr1[i]);
        // console.log("arr2 element",arr2[i]);
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false






