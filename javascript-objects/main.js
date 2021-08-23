var student = {
  firstName: 'Derek',
  lastName: 'Cruz',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'auto mechanic';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'mazda',
  model: 'rx7',
  year: 1988
};

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'leo',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
