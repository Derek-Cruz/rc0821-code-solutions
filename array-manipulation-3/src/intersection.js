/* exported intersection */

function intersection(first, second) {
  var newArr = [];
  for (var firstUnique of first) {
    for (var secondUnique of second) {
      if (firstUnique === secondUnique && !newArr.includes(secondUnique)) {
        newArr.push(secondUnique);
      }
    }
  }
  return newArr;
}
