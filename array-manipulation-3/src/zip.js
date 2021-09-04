/* exported zip */

function zip(first, second) {
  var newArr = [];
  var arrIndex;

  if (first.length <= second.length) {
    arrIndex = first.length;
  } else {
    arrIndex = second.length;
  }

  for (var index = 0; index < arrIndex; index++) {
    var secArr = [];
    secArr.push(first[index]);
    secArr.push(second[index]);
    newArr.push(secArr);
  }
  return newArr;
}
