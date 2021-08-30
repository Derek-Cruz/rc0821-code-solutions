/* exported drop */

function drop(array, count) {
  // if on first line of the function so it can return before doing any work if the array is empty
  if (array.length === 0) {
    return [];
  }
  var newArr = [];
  for (var i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
