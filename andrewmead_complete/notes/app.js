console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
let note;

switch (command) {
  case 'add':
    note = notes.addNote(argv.title, argv.body);
    return note 
      ? console.log(`Added new note: ${notes.logNote(note)}`)
      : console.log('Note already exists!');
  case 'list':
    return notes.getAll();
  case 'read':
    note = notes.getNote(argv.title);
    return note
      ? console.log(`Reading note: ${notes.logNote(note)}`)
      : console.log('Note does not exist!');
  case 'remove':
    note = notes.removeNote(argv.title);
    return note
      ? console.log(`Deleted note: ${notes.logNote(note)}`)
      : console.log('Note does not exist!');
  default:
    return console.log('command does not exist');
}
