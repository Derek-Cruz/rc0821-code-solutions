/* exported difference */

function difference(first, second) {
  var newArr = [];
  for (var firstDifference = 0; firstDifference < first.length; firstDifference++) {
    if (second.indexOf(first[firstDifference]) !== -1) {
      continue;
    }
    newArr.push(first[firstDifference]);
  }
  for (var secondDifference = 0; secondDifference < second.length; secondDifference++) {
    if (first.indexOf(second[secondDifference]) !== -1) {
      continue;
    }
    newArr.push(second[secondDifference]);
  }
  return newArr;
}
