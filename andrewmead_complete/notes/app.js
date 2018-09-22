console.log('starting app');

const fs = require('fs');
const os = require('os');

const user = os.userInfo();

console.log(user);

fs.appendFile('greetings.txt', `Hello ${user.username}`, (err) => {
  if (err) {
    console.log('Unable to write to file');
  }
});