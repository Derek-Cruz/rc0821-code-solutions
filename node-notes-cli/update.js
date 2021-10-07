const data = require('./data.json');
const writeFileReuse = require('./writefile');
const obj = data.notes;

function update(id, string) {
  if (obj[id] !== undefined) {
    obj[id] = string;
  }
  writeFileReuse(update);
}

module.exports = update;
