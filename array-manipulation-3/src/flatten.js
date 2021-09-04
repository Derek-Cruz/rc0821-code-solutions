/* exported flatten */

function flatten(array) {
  var newArr = [];
  var flat = newArr.concat(...array);
  return flat;
}
