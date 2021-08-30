/* exported includes */

function includes(array, value) {
  // if on first line of the function so it can return before doing any work if the array is empty
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
