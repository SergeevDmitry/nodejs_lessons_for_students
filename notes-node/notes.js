console.log('Strating notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
}

var getAll() = () => {
  console.log('Getting all notes');
}

module.exports = {
  addNote,
  getAll
}
