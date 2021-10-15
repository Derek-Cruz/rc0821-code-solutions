const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((num1, num2) => num1 + num2);
console.log('results of sum:', sum);

const product = numbers.reduce((num1, num2) => num1 * num2);
console.log('results of product:', product);

const balance = account.reduce((value1, value2) => (
  (value2.type === 'deposit')
    ? value1 + value2.amount
    : value1 - value2.amount
), 0);
console.log('results of balance:', balance);

const composite = traits.reduce((value1, value2) => Object.assign(value2, value1), {});
console.log('results of composite:', composite);
