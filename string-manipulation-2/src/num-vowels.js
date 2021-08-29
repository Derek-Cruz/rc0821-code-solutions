/* exported numVowels */

function numVowels(string) {
  var allVowels = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      allVowels += 1;
    }
  }
  return allVowels;
}
