/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var index = 0; index < first.length; index++) {
    if (first[index] !== second[index]) {
      return false;
    }
  }
  return true;
}
