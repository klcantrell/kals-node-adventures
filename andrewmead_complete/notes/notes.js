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

const saveNotes = notes => {
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
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Getting all notes');
};

const getNote = title => {
  console.log('Reading note: ', title);
};

const removeNote = title => {
  const notes = fetchNotes();
  const doesNoteExist = notes.some(n => n.title === title);
  if (doesNoteExist) {
    let deletedNote;
    const filteredNotes = notes.filter(n => {
      if (n.title === title) {
        deletedNote = n;
      }
      return n.title !== title;
    });
    saveNotes(filteredNotes);
    return deletedNote;
  }
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};