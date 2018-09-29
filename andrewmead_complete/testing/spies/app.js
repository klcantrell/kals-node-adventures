const db = require('./db');

module.exports = {
  handleSignup(email, age) {
    db.saveUser({ email, age });
  },
};
