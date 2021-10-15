const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => (num % 2) === 0);
console.log('results of evenNumbers:', evenNumbers);

const overFive = numbers.filter(num => num > 5);
console.log('results of overFive:', overFive);

const startWithE = names.filter(name => name.charAt(0) === 'E');
console.log('results of startWithE:', startWithE);

const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log('results of haveD:', haveD);
