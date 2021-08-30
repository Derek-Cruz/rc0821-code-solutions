/* exported truncate */

function truncate(length, string) {
  var newStr = string.substring(0, length) + '...';
  return newStr;
}
