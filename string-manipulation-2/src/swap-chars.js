/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newStr = '';
  newStr = string.substring(0, firstIndex) + string[secondIndex] + string.substring(firstIndex + 1, secondIndex) + string[firstIndex] + string.substring(secondIndex + 1);
  return newStr;
}
