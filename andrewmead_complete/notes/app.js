console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions =  {
    describe: 'Title of the note',
    demand: true,
    alias: 't',
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b',
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a single note', {
    title: titleOptions,
  })
  .command('remove', 'Delete a single note', {
    title: titleOptions,
  })
  .help()
  .argv;
const command = argv._[0];
let note;

switch (command) {
  case 'add':
    note = notes.addNote(argv.title, argv.body);
    return note 
      ? console.log(`Added new note: ${notes.logNote(note)}`)
      : console.log('Note already exists!');
  case 'list':
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    return allNotes.forEach(n => {
      console.log(notes.logNote(n));
    });
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
