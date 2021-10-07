const fs = require('fs');

const randomNum = Math.random();

fs.writeFile('random.txt', randomNum + '\n', err => {
  if (err) throw err;
});
