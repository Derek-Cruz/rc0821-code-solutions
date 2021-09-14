/* exported reverseWords */

function reverseWords(string) {
  var words = string.split(' ');
  var newString = '';
  for (var character of words) {
    for (var i = character.length - 1; i >= 0; i--) {
      newString += character[i];
    }
    if (character === words[words.length - 1]) {
      return newString;
    } else {
      newString += ' ';
    }
  }
  return newString;
}
