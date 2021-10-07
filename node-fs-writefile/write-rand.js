const fs = require('fs');

let randomNum = Math.random();
randomNum = '' + randomNum;

fs.writeFile('random.txt', randomNum, err => {
  if (err) throw err;
});
