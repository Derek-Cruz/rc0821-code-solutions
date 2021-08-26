/* exported countdown */

function countdown(number) {
  var newArr = [];
  for (var count = number; count >= 0; count--) {
    newArr.push(count);
  }
  return newArr;
}
