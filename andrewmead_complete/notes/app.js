console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
  case 'add':
    return notes.addNote(argv.title, argv.body);
  case 'list':
    return notes.getAll();
  case 'read':
    return notes.getNote(argv.title);
  case 'remove':
    return notes.remove(argv.title)
  default:
    return console.log('command does not exist');
}
