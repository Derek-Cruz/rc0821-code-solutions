/* exported isAnagram */

function isAnagram(firstString, secondString) {
  firstString = firstString.replaceAll(' ', '');
  secondString = secondString.replaceAll(' ', '');
  if (firstString.length !== secondString.length) {
    return false;
  }
  for (var i = 0; i < secondString.length; i++) {
    if (!firstString.includes(secondString[i])) {
      return false;
    }
  }
  return true;
}
