const data = require('./data.json');
const writeFileReuse = require('./writefile');
const obj = data.notes;

function create(string) {
  obj[data.nextId] = string;
  data.nextId = data.nextId + 1;
  writeFileReuse(create);
}

module.exports = create;
