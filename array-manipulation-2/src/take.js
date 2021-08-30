/* exported take */

function take(array, count) {
  // if on first line of the function so it can return before doing any work if the array is empty
  if (array.length === 0) {
    return [];
  }
  var newArr = [];
  for (var i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
