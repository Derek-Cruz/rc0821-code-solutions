const data = require('./data.json');
const fs = require('fs');

function writeFileReuse() {
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', newData + '\n', err => {
    if (err) throw err;
  });
}

module.exports = writeFileReuse;
