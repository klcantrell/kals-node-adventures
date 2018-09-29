const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    name: 'Kalalau',
    error: 'Page not found',
  });
});

app.get('/users', (req, res) => {
  res.send([{ name: 'Kalalau' }, { name: 'Cloud' }, { name: 'Squall' }]);
});

app.listen(3000, () => {
  console.log('server started on port 3000');
});

module.exports = app;
