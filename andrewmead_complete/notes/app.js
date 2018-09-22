console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
  case 'add':
    const note = notes.addNote(argv.title, argv.body);
    return note 
      ? console.log(`Added new note: \n --- \n Title: ${note.title} \n Body: ${note.body}`)
      : console.log('Note already exists!');
  case 'list':
    return notes.getAll();
  case 'read':
    return notes.getNote(argv.title);
  case 'remove':
    const deletedNote = notes.removeNote(argv.title)
    return deletedNote
      ? console.log(`Deleted note: \n --- \n Title: ${deletedNote.title} \n Body: ${deletedNote.body}`)
      : console.log('Note does not exist!');
  default:
    return console.log('command does not exist');
}
