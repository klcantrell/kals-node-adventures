console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

const filteredArray = _.uniq([1, 2, 2, 2, 4, 3, 'kalalau', 'kalalau']);
console.log(filteredArray);

// const user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}, you are ${notes.age}`, (err) => {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
