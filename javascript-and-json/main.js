var library = [
  {
    isbn: '123456789',
    title: 'CHRNCLS V1',
    author: 'Joey Lee'
  },
  {
    isbn: '987654321',
    title: 'CHRNCLS V2',
    author: 'Joey Lee'
  },
  {
    isbn: '657483921',
    title: '80R',
    author: 'Sean Lucas'
  }
];

console.log('books:', library);
console.log('typeof library:', typeof library);

console.log('JSON:', JSON.stringify(library));
console.log('typeof JSON.stringify:', typeof JSON.stringify(library));

var student = '{"id":"214365879","name":"derek"}';

console.log('value of student:', student);
console.log('typeof student', typeof student);

var obj = JSON.parse(student);
console.log('JSON.parse:', obj);
console.log('typeof JSON.parse:', typeof obj);
