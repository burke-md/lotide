const middle = function(arr) {
  let mid = [];
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

module.exports = middle;


