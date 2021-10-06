const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

const num1 = process.argv[2];
const num2 = process.argv[4];
const op = process.argv[3];

function testing(num1, op, num2) {
  const parsed = parseFloat(num1);
  const parsed2 = parseFloat(num2);
  if (op === 'plus') {
    console.log('result:', add(parsed, parsed2));
  } else if (op === 'minus') {
    console.log('result:', subtract(parsed, parsed2));
  } else if (op === 'times') {
    console.log('result:', multiply(parsed, parsed2));
  } else if (op === 'over') {
    console.log('result:', divide(parsed, parsed2));
  }
}

testing(num1, op, num2);
