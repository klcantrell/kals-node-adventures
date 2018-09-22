console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const readline = require('readline');

const notes = require('./notes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  const [command, argument] = line.trim().split(' ');
  switch (command) {
    case 'add':
      return console.log('*****\n adding new note');
    case 'list':
      return console.log('*****\n listing notes');
    case 'read':
      return console.log('*****\n reading a note');
    case 'delete':
      return console.log('*****\n deleting a note');
    default:
      return console.log('*****\n command not recognized');
  }
});
