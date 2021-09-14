/* exported titleCase */

function titleCase(title) {
  var words = title.split(' ');
  var newString = '';
  var originalTest = '';
  for (var i of words) {
    if (/javascript:?/g.test(i.toLowerCase())) {
      newString += 'JavaScript' + i.slice(10);
    } else if (i.toLowerCase() === 'api') {
      newString += 'API';
    } else if (i.toLowerCase() === 'web') {
      newString += 'Web';
    } else if (i.includes('-')) {
      newString += i.charAt(0).toUpperCase() + i.slice(1, i.indexOf('-') + 1) + i.charAt(i.indexOf('-') + 1).toUpperCase() + i.slice(i.indexOf('-') + 2);
    } else if (i.length > 3) {
      newString += i.charAt(0).toUpperCase() + i.slice(1);
    } else if (originalTest.includes(':')) {
      newString += i.charAt(0).toUpperCase() + i.slice(1);
    } else if (i === words[0]) {
      newString += i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      newString += i;
    }

    if (i === words[words.length - 1]) {
      return newString;
    } else {
      newString += ' ';
    }
    originalTest = i;
  }
}
