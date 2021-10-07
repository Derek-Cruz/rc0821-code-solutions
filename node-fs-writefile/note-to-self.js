const fs = require('fs');

const noteToMe = process.argv[2];

fs.writeFile('note.txt', noteToMe + '\n', err => {
  if (err) throw err;
});
