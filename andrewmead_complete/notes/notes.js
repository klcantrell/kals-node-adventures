console.log('starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch(e) {
    console.log('Creating new note');
    return [];
  }
};

const saveNote = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };
  const isDuplicate = notes.some(n => n.title === title);
  if (!isDuplicate) {
    notes.push(note);
    saveNote(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = title => {
  console.log('Reading note: ', title);
};

const remove = title => {
  console.log('Removing note: ', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  remove,
};
