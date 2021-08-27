/* exported capitalize */

function capitalize(word) {
  var first = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return first;
}
