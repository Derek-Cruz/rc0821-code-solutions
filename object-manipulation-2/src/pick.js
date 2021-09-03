/* exported pick */

function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
