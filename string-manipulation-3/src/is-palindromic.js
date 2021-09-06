/* exported isPalindromic */

function isPalindromic(string) {
  var specialCharaters = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(specialCharaters, '');
  var test = string.length;
  for (var i = 0; i < test / 2; i++) {
    if (string[i] !== string[test - 1 - i]) {
      return false;
    }
  }
  return true;
}
