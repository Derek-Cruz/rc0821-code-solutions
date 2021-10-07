const data = require('./data.json');
const obj = data.notes;

function read() {
  for (const key in obj) {
    console.log(key, ': ', obj[key]);
  }
}

module.exports = read;
