/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var average = 0;
    for (var i = 0; i < numbers.length; i++) {
      average = average + numbers[i];
    }
    return average / (numbers.length);
  }
};
