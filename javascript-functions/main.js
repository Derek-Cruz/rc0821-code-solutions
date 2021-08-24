function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  var first = '"Hey, ' + name + '"';
  return first;
}

var greetResults = greet('Beavis');

console.log('greetResults:', greetResults);

function getArea(width, height) {
  var sum = width * height;
  return sum;
}

var getAreaResults = getArea(17, 42);

console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  var getName = person.firstName;
  return getName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResults:', getFirstNameResults);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResults:', getLastElementResults);
