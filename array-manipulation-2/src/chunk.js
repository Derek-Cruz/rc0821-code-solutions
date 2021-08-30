/* exported chunk */

function chunk(array, size) {
  // if on first line of the function so it can return before doing any work if the array is empty
  if (array.length === 0) {
    return [];
  }
  var newArr = [];
  for (var i = 0; i < array.length; i += size) {
    var subArr = array.slice(i, i + size);
    newArr.push(subArr);
  }
  return newArr;
}
