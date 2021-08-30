/* exported getValues */

function getValues(object) {
  var values = [];
  for (var value in object) {
    values.push(object[value]);
  }
  return values;
}
