const data = require('./data.json');
const writeFileReuse = require('./writefile');
const obj = data.notes;

function deleteNote(id) {
  delete obj[id];
  writeFileReuse(deleteNote);
}

module.exports = deleteNote;
