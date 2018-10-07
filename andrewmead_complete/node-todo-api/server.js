const express = require('express');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./db/models/todo');

const app = express();

app.use(express.json());

app.post('/todos', async (req, res) => {
  try {
    const result = await Todo.create(req.body);
    return res.send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
