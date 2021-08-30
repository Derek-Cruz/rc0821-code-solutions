/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var newStr = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newStr += word[i].toUpperCase();
    } else {
      newStr += word[i].toLowerCase();
    }
  }
  return newStr;
}
