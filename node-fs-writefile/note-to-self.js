const fs = require('fs');

const noteToMe = process.argv[2];

fs.writeFile('note.txt', noteToMe, err => {
  if (err) throw err;
});
