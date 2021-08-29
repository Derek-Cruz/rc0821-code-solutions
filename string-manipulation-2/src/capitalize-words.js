/* exported capitalizeWords */

function capitalizeWords(string) {
  var newStr = '';
  var strCap = string.split(' ');
  for (var i = 0; i < strCap.length; i++) {
    strCap[i] = strCap[i][0].toUpperCase() + strCap[i].substr(1).toLowerCase();
    newStr = strCap.join(' ');
  }
  return newStr;
}
