/* exported isVowel */

function isVowel(char) {
  var vowel = ['a', 'E', 'I', 'o', 'u'];
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel[i]) {
      return true;
    }
  }
  return false;
}
