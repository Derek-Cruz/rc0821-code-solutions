/* exported union */

function union(first, second) {
  var newArr = [];
  for (var firstValues of first) {
    if (!newArr.includes(firstValues)) newArr.push(firstValues);
  }
  for (var secondValues of second) {
    if (!newArr.includes(secondValues)) newArr.push(secondValues);
  }
  return newArr;
}
