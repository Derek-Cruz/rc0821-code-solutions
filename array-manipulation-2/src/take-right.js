/* exported takeRight */

function takeRight(array, count) {
  // if on first line of the function so it can return before doing any work if the array is empty
  if (array.length === 0) {
    return [];
  }
  var newArr = [];
  for (var i = array.length - 1; i >= (array.length) - count; i--) {
    newArr.unshift(array[i]);
  }
  return newArr;
}
