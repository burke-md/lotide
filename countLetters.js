const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentensce){
let count = {}
let word = sentensce.replace(/ /g,"")
for (const letter of word) {

   //if letter is in count object add 1, else add to object and set to 1
  if (count[letter]) {
    count[letter] += 1;
     } else {
    count[letter] = 1;
    }
  }
return count
}

console.log(countLetters("lighthouse in the house"))


