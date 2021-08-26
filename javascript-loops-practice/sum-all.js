/* exported sumAll */

function sumAll(numbers) {
  var total = 0;
  for (var sum = 0; sum < numbers.length; sum++) {
    total += numbers[sum];
  }
  return total;
}
